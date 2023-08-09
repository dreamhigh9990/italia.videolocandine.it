<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Campaign;
use App\Photo;
use App\Video;
use App\Grouptype;
use App\AspectRatio;
use App\Group;
use App\AspectratioIcon;
use Illuminate\Support\Facades\File;

class CampaignsController extends Controller
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
        // $groups = Group::all();
        $groups = $user->groups;
        $monitors = $user->monitors;
        $shops = $user->shops;
        $ratios = AspectRatio::all();
        $types = Grouptype::all();
        $icons = AspectratioIcon::all();
        return response()->json(compact('user', 'groups', 'ratios', 'types', 'icons', 'shops', 'monitors'));
    }

    public function edit($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $groups = $user->groups;
        $monitors = $user->monitors;
        $shops = $user->shops;
        $ratios = AspectRatio::all();
        $types = Grouptype::all();
        $icons = AspectratioIcon::all();
        $campaign = Campaign::find($id);
        $videos = $campaign->videos;
        $photos = $campaign->photos;
        $posters = $campaign->posters;
        return response()->json(compact('videos', 'photos', 'groups', 'ratios', 'types', 'campaign', 'posters', 'user', 'monitors', 'shops', 'icons'));
    }

    public function update(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $campaign = Campaign::find($id);

        $campaign->name = $request->name;
        $campaign->description = $request->description;
        // $campaign->start_date = $request->start_date;
        // $campaign->end_date = $request->end_date;
        // $campaign->start_time = $request->start_time;
        // $campaign->end_time = $request->end_time;
        // $campaign->days = $request->days;
        $campaign->sponsor = filter_var($request->sponsor, FILTER_VALIDATE_BOOLEAN);
        $campaign->save();

        $media = $request->media;
        foreach ($media as $key => $item) {
            if($item['file_type'] == "image"){
                $image['user_id'] = $user->id;
                $image['image'] = $item['name'];
                $image['original'] = $item['original'];
                $image['width'] = $item['width'];
                $image['height'] = $item['height'];
                $image['size'] = $item['filesize'];
                $image['duration'] = $item['duration'];
                $image['start_time'] = $item['start_time'];
                $image['start_date'] = $item['start_date'];
                $image['end_time'] = $item['end_time'];
                $image['end_date'] = $item['end_date'];
                $image['days'] = $campaign->days;
                $image['campaign_id'] = $campaign->id;
                $image['group_type_id'] = $item['group_type_id'];
                $image['aspect_ratio_id'] = $this->getAspectRatio($item['width'], $item['height']);
                // $image['group_ids'] = $this->getGroups($image['group_type_id'], $image['aspect_ratio_id']);
                $image['group_ids'] = $item['group_ids'];
                $image['monitor_ids'] = $item['monitor_ids'];
                Photo::insert($image);
            } else if($item['file_type'] == "video"){
                $video['user_id'] = $user->id;
                $video['video'] = $item['name'];
                $video['original'] = $item['original'];
                $video['width'] = $item['width'];
                $video['height'] = $item['height'];
                $video['size'] = $item['filesize'];
                $video['duration'] = $item['duration'];
                $video['start_time'] = $item['start_time'];
                $video['start_date'] = $item['start_date'];
                $video['end_time'] = $item['end_time'];
                $video['end_date'] = $item['end_date'];
                $video['days'] = $campaign->days;
                $video['campaign_id'] = $campaign->id;
                $video['group_type_id'] = $item['group_type_id'];
                $video['aspect_ratio_id'] = $this->getAspectRatio($item['width'], $item['height']);
                // $video['group_ids'] = $this->getGroups($video['group_type_id'], $video['aspect_ratio_id']);
                $video['group_ids'] = $item['group_ids'];
                $video['monitor_ids'] = $item['monitor_ids'];
                Video::insert($video);
            }
        }

    }

    public function updateDate(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $campaign = Campaign::find($id);

        $campaign->start_date = $request->start_date;
        $campaign->end_date = $request->end_date;
        $campaign->start_time = $request->start_time;
        $campaign->end_time = $request->end_time;
        $campaign->days = $request->days;
        $campaign->save();

        $videos = $campaign->videos;
        $photos = $campaign->photos;
        $posters = $campaign->posters;

        foreach ($videos as $key => $video) {
            $video['start_time'] = $request->start_time;
            $video['start_date'] = $request->start_date;
            $video['end_time'] = $request->end_time;
            $video['end_date'] = $request->end_date;
            $video['days'] = $request->days;
            $video->update();
        }
        foreach ($photos as $key => $photo) {
            $photo['start_time'] = $request->start_time;
            $photo['start_date'] = $request->start_date;
            $photo['end_time'] = $request->end_time;
            $photo['end_date'] = $request->end_date;
            $video['days'] = $request->days;
            $photo->update();
        }
        foreach ($posters as $key => $poster) {
            $poster['start_time'] = $request->start_time;
            $poster['start_date'] = $request->start_date;
            $poster['end_time'] = $request->end_time;
            $poster['end_date'] = $request->end_date;
            $video['days'] = $request->days;
            $poster->update();
        }

        return response()->json(compact('videos', 'photos', 'campaign', 'posters'));
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

	public function index(){
    	// $campaigns = Campaign::all();
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $campaigns = $user->campaigns;
    	return response()->json(compact('campaigns'));
    }

    public function addNew(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $campaign = new Campaign();

        $campaign->user_id = $user->id;
        $campaign->name = $request->name;
        $campaign->description = $request->description;
        $campaign->start_date = $request->start_date;
        $campaign->end_date = $request->end_date;
        $campaign->start_time = $request->start_time;
        $campaign->end_time = $request->end_time;
        $campaign->days = $request->days;
        $campaign->sponsor = filter_var($request->sponsor, FILTER_VALIDATE_BOOLEAN);
    	$campaign->save();
    	
    	$media = $request->media;
        foreach ($media as $key => $item) {
            if($item['file_type'] == "image"){
	        	$image['image'] = $item['name'];
                $image['original'] = $item['original'];
	        	$image['width'] = $item['width'];
	        	$image['height'] = $item['height'];
                $image['size'] = $item['filesize'];
                $image['duration'] = $item['duration'];
	        	$image['start_time'] = $item['start_time'];
                $image['start_date'] = $item['start_date'];
                $image['end_time'] = $item['end_time'];
                $image['end_date'] = $item['end_date'];
	        	$image['days'] = $request->days;
                $image['duration'] = $item['duration'];
	        	$image['campaign_id'] = $campaign->id;
                $image['group_type_id'] = $item['group_type_id'];
	        	$image['aspect_ratio_id'] = $this->getAspectRatio($item['width'], $item['height']);
                $image['group_ids'] = $item['group_ids'];
                $image['monitor_ids'] = $item['monitor_ids'];
                $image['user_id'] = $user->id;
                Photo::insert($image);
	    	} else if($item['file_type'] == "video"){
                $video['video'] = $item['name'];
                $video['original'] = $item['original'];
                $video['width'] = $item['width'];
                $video['height'] = $item['height'];
                $video['size'] = $item['filesize'];
                $video['duration'] = $item['duration'];
                $video['start_time'] = $item['start_time'];
                $video['start_date'] = $item['start_date'];
                $video['end_time'] = $item['end_time'];
                $video['end_date'] = $item['end_date'];
                $video['days'] = $request->days;
                $video['campaign_id'] = $campaign->id;
                $video['group_type_id'] = $item['group_type_id'];
                $video['aspect_ratio_id'] = $this->getAspectRatio($item['width'], $item['height']);
                $video['monitor_ids'] = $item['monitor_ids'];
                $video['group_ids'] = $item['group_ids'];
                $video['user_id'] = $user->id;
                Video::insert($video);
	    	}
    	}
    	return response()->json([
    		"result" => "success",
			"message" => "Added successfully",
			"id" => $campaign->id
		]);
    }

    public function delete($id){
    	$campaign = Campaign::find($id);
        $photos = $campaign->photos;
        foreach ($photos as $photo) {
            File::delete("./media/images/" . $photo->image);
            $photo->delete();
        }
        $videos = $campaign->videos;
        foreach ($videos as $video) {
            File::delete("./media/videos/" . $video->video);
            $video->delete();
        }
    	$campaign->delete();
    	return response()->json([
    		"result" => "success",
			"message" => "Deleted successfully"
		]);
    }

    public function upload(Request $request){
        $uploadFile =  $request->media;
        if(!$uploadFile) return;
        $original = $uploadFile->getClientOriginalName();
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $fileSize = 0;
        
        if($this->getFileType($uploadFile) == "image"){
            $destinationPath = 'media/images';
            $fileType = "image";
            $uploadFile->move($destinationPath, $filename);
            list($width, $height) = getimagesize("media/images/" . $filename);
            $resolution_x = $width;
            $resolution_y = $height;
            $duration = 6;
            $frame_rate = 0;
            $fileSize = number_format((float)(filesize("media/images/" . $filename) / 1024 / 1024), 3);
        } else if($this->getFileType($uploadFile) == "video"){
            $destinationPath = 'media/videos';
            $fileType = "video";
            $uploadFile->move($destinationPath, $filename);
            $getID3 = new \getID3;
            $file_info = $getID3->analyze($destinationPath . '/' . $filename);
            if (isset($file_info['video'])) {
                if (isset($file_info['video']['frame_rate'])) {
                    $frame_rate = $file_info['video']['frame_rate'];
                }
                if (isset($file_info['video']['resolution_x'])) {
                    $resolution_x = $file_info['video']['resolution_x'];
                }
                if (isset($file_info['video']['resolution_y'])) {
                    $resolution_y = $file_info['video']['resolution_y'];
                }
                if (isset($file_info['playtime_seconds'])) {
                    $duration = round($file_info['playtime_seconds'], 0);
                }
                if (isset($file_info['filesize'])) {
                    $fileSize = number_format((float)($file_info['filesize'] / 1024 / 1014), 3);
                }
            } else {
                var_dump($file_info);
                exit;
            }

        } else {
            return response()->json([
                'result' => 'error',
                'message' => $this->getFileType($uploadFile)
            ], 403);
        }
        if($this->getAspectRatio($resolution_x, $resolution_y) == 0){
            return response()->json([
                'result' => 'error',
                'message' => 'Aspect ratio doesn\'t match'
            ], 403);
        }
        return response()->json([
            'result' => 'success',
            'file_type' => $fileType,
            'filename'=> $filename,
            'original'=> $original,
            'width' => $resolution_x,
            'height' => $resolution_y,
            'duration' => $duration,
            'filesize' => $fileSize,
            'group_ids' => '',
            'frame_rate' => $frame_rate,
            'group_type_id' => $this->getGroupType($uploadFile->getClientOriginalName()),
            'aspect_ratio_id' => $this->getAspectRatio($resolution_x, $resolution_y)
        ]);
    }

    public function getGroupType($fileName){
        $groupTypes = Grouptype::all();
        foreach ($groupTypes as $key => $groupType) {
            if(strpos($fileName, $groupType->key) !== false){
                return $groupType->id;
            }
        }
        return 0;
    }

    public function getAspectRatio($width, $height){
        $ratios = AspectRatio::all();
        $ratioString = $width . 'x' . $height;
        foreach ($ratios as $key => $ratio) {
            if(strpos($ratio->name, $ratioString) !== false){
                return $ratio->id;
            }
        }
        return 0;
    }

    public function getGroups($typeId, $ratioId){
        $groups = Group::all();
        $group_ids = [];
        foreach ($groups as $key => $group) {
            if($group->aspect_ratio_id == $ratioId && $group->group_type_id == $typeId)
                array_push($group_ids, $group->id);
        }
        return implode(',', $group_ids);
    }
}
