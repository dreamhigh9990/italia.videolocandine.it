<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Photo;
use App\Video;
use App\Campaign;
use App\Group;
use App\Grouptype;
use Image;
use Illuminate\Support\Facades\File;
use Validator;

class ImagesController extends Controller
{
	public $image_path = "media/images/";
    public function index(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $images = $user->images;
        $groups = $user->groups;
        $campaigns = $user->campaigns;
        $monitors = $user->monitors;
        $group_types = Grouptype::all();
    	return response()->json(compact('images', 'campaigns', 'groups', 'group_types', 'user', 'monitors'));
    }
    public function update(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        
        $this->validate($request, [
            'duration' => 'numeric|min:0'
        ]);
    	$image = Photo::findOrFail($id);
    	$image->start_date = $request->start_date;
    	$image->start_time = $request->start_time;
    	$image->end_date = $request->end_date;
    	$image->end_time = $request->end_time;
    	$image->days = $request->days;
        $image->duration = $request->duration;
        $image->group_ids = $user->by_monitor == '0' ? $request->group_ids : '';
        $image->monitor_ids = $user->by_monitor == '0' ? $this->getMonitorIdsFromGroupIds($request->group_ids) : $request->monitor_ids;
    	if($request->file('image')){
	    	$extension = $request->file('image')->getClientOriginalExtension();
	        $filename = uniqid();
	        $file = $request->file('image')->move($this->image_path, $filename . "." . $extension);
	        $img = Image::make($this->image_path.$filename.".".$extension);
	        $img->save($this->image_path.$filename.".".$extension);

	        $image->image = $filename . "." . $extension;
    	}
    	$image->save();

    	return response()->json([
    		"result" => "success",
			"message" => "Shop updated successfully"
		]);
    }
    public function getImage($id){
    	$image = Photo::find($id);
    	return response()->json(compact('image'));
    }

    public function delete($id){
    	$photo = Photo::find($id);
    	$photo->delete();
        File::delete("./media/images/" . $photo->image);
    	return response()->json([
    		"result" => "success",
			"message" => "Deleted successfully"
		]);
    }

    public function getImagesOfCampaign($campaign_id){
        $campaign = Campaign::find($campaign_id);
        if($campaign){
            $photos = $campaign->photos;
        } else {
            $photos = array();
        }
        return response()->json(compact('photos'));
    }

    public function getMonitorIdsFromGroupIds($group_ids_str){
        $group_ids = explode(',', $group_ids_str);
        $monitor_ids = array();
        foreach ($group_ids as $key => $group_id) {
            $group = Group::find((int)$group_id);
            if($group)
                $monitor_ids_ = $group->monitor_ids;
            else
                continue;
            $monitor_ids = array_merge($monitor_ids, explode(',', $group->monitor_ids));
        }
        return implode(',', $monitor_ids);
    }
}
