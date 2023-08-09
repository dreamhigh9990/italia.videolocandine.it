<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Video;
use App\Group;
use App\Grouptype;
use App\Campaign;
use Illuminate\Support\Facades\File;
use Validator;

class VideosController extends Controller
{
	public function index(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $videos = $user->videos;
        $campaigns = $user->campaigns;
        $groups = $user->groups;
        $monitors = $user->monitors;
    	// $videos = Video::all();
    	// $campaigns = Campaign::all();
    	// $groups = Group::all();
        $group_types = Grouptype::all();
    	return response()->json(compact('user', 'videos', 'campaigns', 'groups', 'group_types', 'monitors'));
    }
    public function getVideos(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $videos = Video::whereNotNull('id');
		if(request()->has('video')){
			$videos = $videos->where('original','like','%'.request('video').'%');
		}
        if(request()->has('campaign_id'))
            $videos = $videos->where('campaign_id', request('campaign_id'));
        $videos_ = $videos->where('user_id', $user->id)->get();
        
        $live_videos = array();
        if(request()->has('live_type')){
            foreach ($videos_ as $key => $video_) {
                if(h_isLive($video_))
                    array_push($live_videos, $video_);
            }
        } else {
            $live_videos = $videos_;
        }

        $videos = array();
        if(request()->has('group_id')){
        	$group_id = request('group_id');
        	foreach ($live_videos as $key => $video_) {
	        	$group_ids_string = $video_['group_ids'];
                $group_ids = explode(',', $group_ids_string);
                if(in_array($group_id, $group_ids))
                    array_push($videos, $video_);
        	}
        }
        if(!(request()->has('group_id')))
        	$videos = $live_videos;
        return response()->json(compact('videos'));
    }
    public function getVideo($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$video = Video::find($id);
    	$groups = $user->groups;
    	return response()->json(compact('video', 'groups'));
    }
    public function delete($id){
    	$video = Video::find($id);
    	$video->delete();
        File::delete("./media/videos/" . $video->video);
    	return response()->json([
    		"result" => "success",
			"message" => "Deleted successfully"
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

        $this->validate($request, [
            'duration' => 'numeric|min:0'
        ]);
    	$video = Video::find($id);
    	$groups = $request->groups;
    	$video->group_ids = $user->by_monitor == '0' ? $request->group_ids : '';
        $video->monitor_ids = $user->by_monitor == '0' ? $this->getMonitorIdsFromGroupIds($request->group_ids) : $request->monitor_ids;
    	$video->start_time = $request->start_time;
    	$video->start_date = $request->start_date;
    	$video->end_time = $request->end_time;
    	$video->end_date = $request->end_date;
    	$video->days = $request->days;
        $video->duration = $request->duration;
    	$video->save();
    	return response()->json([
    		"result" => "success",
			"message" => "Shop updated successfully"
		]);
    }
    public function getVideosOfCampaign($campaign_id){
        $campaign = Campaign::find($campaign_id);
        if($campaign){
            $videos = $campaign->videos;
        } else {
            $videos = array();
        }
        return response()->json(compact('videos'));
    }

    public function getMonitorIdsFromGroupIds($group_ids_str){
        $group_ids = explode(',', $group_ids_str);
        $monitor_ids = array();
        foreach ($group_ids as $key => $group_id) {
            $group = Group::find((int)$group_id);
            if(!$group)
                continue;
            $monitor_ids_ = $group->monitor_ids;
            $monitor_ids = array_merge($monitor_ids, explode(',', $group->monitor_ids));
        }
        return implode(',', $monitor_ids);
    }
}
