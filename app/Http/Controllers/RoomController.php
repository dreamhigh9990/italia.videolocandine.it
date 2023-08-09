<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Monitor;
use App\Poster;
use App\Group;
use App\MonitorRedundancy;
use App\AspectRatioIt;
use App\Grouptype;

class RoomController extends Controller
{
    public function init_(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $groups = $user->groups;
        $shops = $user->shops;
        $posters = $user->posters;
        $images = $user->images;
        $monitors = $user->monitors;
        $monitor_redundancies = MonitorRedundancy::all();
        $videos = $user->getMyLiveVideos();
        $aspect_ratios = AspectRatioIt::all();
        
        return response()->json(compact('user', 'monitors', 'posters', 'monitor_redundancies', 'videos', 'aspect_ratios', 'groups', 'shops', 'images'));
    }
    
    public function init(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $shops = $user->shops;
        $group_types = Grouptype::all();
        $monitors = $user->monitors;
        $monitor_redundancies = MonitorRedundancy::all();
        $aspect_ratios = AspectRatioIt::all();
        
        foreach($monitors as $monitor){
            $monitor->videos = $monitor->liveVideos();
            $monitor->images = $monitor->liveImages();
            $monitor->posters = $monitor->livePosters();
        }

        return response()->json(compact('user', 'monitors', 'monitor_redundancies', 'shops', 'aspect_ratios', 'group_types'));
    }
}
