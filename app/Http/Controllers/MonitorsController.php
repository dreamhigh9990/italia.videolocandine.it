<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Auth;

use App\Monitor;
use App\Shop;
use App\Group;
use App\AspectRatioIt;
use App\Grouptype;
use App\MonitorRedundancy;

class MonitorsController extends Controller
{
    public $images = array('image/png', 'image/jpeg');
    public $videos = array('video/quicktime', 'audio/mpeg', 'video/mp4');

    public function init(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $shops = $user->shops;
        $groups = $user->groups;
    	$ratios = AspectRatioIt::all();
    	$types = Grouptype::all();
    	return response()->json(compact('shops', 'ratios', 'types', 'groups'));
    }

    public function getMonitors(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $monitors = Monitor::where('user_id', $user->id);
        if(request()->has('shop_id')){
            $monitors = $monitors->where('shop_id', request('shop_id'));
        }
        if(request()->has('group_id')){
            $group = Group::find(request('group_id'));
            if($group){
                $monitor_ids = explode(',', $group->monitor_ids);
                $monitor_ids = array_map(function($value){
                    return intval($value);
                }, $monitor_ids);
                $monitors = $monitors->whereIn('id', $monitor_ids);
            }
        }
        $monitors = $monitors->get();
        foreach ($monitors as $key => $monitor) {
            $monitor->aspectratio = $monitor->aspectRatio->name;
            $monitor->shop = $monitor->monitorShop->name;
            $monitor->type = $monitor->groupType->name;
        }
    	return response()->json(compact('monitors'));
    }

    public function getMonitorsGroups(){
        $user = Auth::user();
        $monitors = $user->monitors;
        $groups = $user->groups;
        $shops = $user->shops;
        return response()->json(compact('monitors', 'groups', 'shops'));
    }
    
    public function addNew(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$query = $request->all();
        $query['user_id'] = $user->id;
    	Monitor::insert($query);
    	return response()->json([
    		"result" => "success",
			"message" => "Monitor added successfully"
		]);
    }

    public function update(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$monitor = Monitor::find($id);
    	
    	$monitor->name = $request->name;
    	$monitor->type_id = $request->type_id;
    	$monitor->aspect_ratio_id = $request->aspect_ratio_id;
    	$monitor->rotation = $request->rotation;
    	$monitor->shop_id = $request->shop_id;
        $monitor->description = $request->description;

    	$monitor->save();
    	return response()->json([
    		"result" => "success",
			"message" => "Monitor updated successfully"
		]);
    }

    public function delete($id){
    	$monitor = Monitor::find($id);
    	$monitor->delete();
    	return response()->json([
    		"result" => "success",
			"message" => "Monitor deleted successfully"
		]);
    }

    public function uploadRedundancy(Request $request, $id){
        $monitor = Monitor::find($id);
        if(!$monitor){
            return response()->json([
                "result" => "error",
                "message" => "Monitor not found"
            ]);
        }
        $uploadFile =  $request->media;
        if(!$uploadFile) return;

        $type = $this->getFileType($uploadFile);
        $destinationPath = 'media/monitor-redundancies/';
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $uploadFile->move($destinationPath, $filename);

        if($type == "unknown"){
            return response()->json([
                "result" => "error",
                "message" => "Not valid type"
            ]);
        }
        $image['type'] = $type;
        $image['file'] = $filename;
        if($type == "image"){
            $image['duration'] = 6;
        } else {
            $getID3 = new \getID3;
            $file_info = $getID3->analyze($destinationPath . '/' . $filename);
            if (isset($file_info['playtime_seconds'])) {
                $image['duration'] = round($file_info['playtime_seconds'], 0);
            }
        }
        $image['monitor_id'] = $monitor->id;
        $monitor_redundancies = MonitorRedundancy::where('monitor_id', $monitor->id)->get();
        foreach ($monitor_redundancies as $key => $value) {
            $value->delete();
            File::delete("./media/monitor-redundancies/" . $value->file);
        }
        MonitorRedundancy::insert($image);
        return response()->json(compact('image'));
    }

    public function getMonitorRedundancy($id){
        $redundancy = MonitorRedundancy::where('monitor_id', $id)->first();
        return response()->json(compact('redundancy'));
    }

    public function getFileType($item){
        $type = $item->getMimeType();
        if(in_array($type, $this->images))
            return "image";
        else if(in_array($type, $this->videos))
            return "video";
        else
            return "unknown";
    }
}
