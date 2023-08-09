<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Group;

class Monitor extends Model
{
    public $timestamps = false;
    
    public function user(){
        return $this->belongsTo('App\User');
    }
    
    public function groups(){
    	$groups = Group::get();
    	$groups_ = array();

    	foreach ($groups as $key => $group) {
    		if(in_array($this->id, explode(',', $group->monitor_ids))){
    			array_push($groups_, $group);
    		}
    	}
    	return $groups_;
    }
    
    public function aspectRatio(){
        return $this->belongsTo('App\AspectRatioIt', 'aspect_ratio_id');
    }

    public function monitorShop(){
        return $this->belongsTo('App\Shop', 'shop_id');
    }

    public function groupType(){
        return $this->belongsTo('App\Grouptype', 'type_id');
    }
    
    public function videos(){
    	$videos = Video::orderBy('original')->get();
    	$videos_ = array();

    	foreach ($videos as $key => $video) {
    		if(in_array($this->id, explode(',', $video->monitor_ids))){
    			array_push($videos_, $video);
    		}
    	}
    	return $videos_;
    }

    public function images(){
    	$images = Photo::orderBy('original')->get();
    	$images_ = array();

    	foreach ($images as $key => $image) {
    		if(in_array($this->id, explode(',', $image->monitor_ids))){
    			array_push($images_, $image);
    		}
    	}
    	return $images_;
    }

    public function posters(){
        $posters = Poster::orderBy('name')->get();
        $posters_ = array();

        foreach ($posters as $key => $poster) {
            if(in_array($this->id, explode(',', $poster->monitor_ids))){
                array_push($posters_, $poster);
            }
        }
        return $posters_;
    }
    
    public function liveVideos(){
        $user = $this->user;
        if(!$user)
            return response()->json([
                "error" => "User not found"
            ], 404);
        $videos = array();
    	if(!$user->by_monitor){
            $groups = $this->groups();
            foreach ($groups as $key => $group) {
                foreach ($group->videos() as $key => $video) {
                    if(h_isLive($video))
                        array_push($videos, $video);
                }
            }
        } else {
            foreach ($this->videos() as $key => $video) {
                if(h_isLive($video))
                    array_push($videos, $video);
            }
        }
        return $videos;
    }
    
    public function liveImages(){
        $user = $this->user;
        if(!$user)
            return response()->json([
                "error" => "User not found"
            ], 404);
        $images = array();
    	if(!$user->by_monitor){
            $groups = $this->groups();
            foreach ($groups as $key => $group) {
                foreach ($group->images() as $key => $image) {
                    if(h_isLive($image))
                        array_push($images, $image);
                }
            }
        } else {
            foreach ($this->images() as $key => $image) {
                if(h_isLive($image))
                    array_push($images, $image);
            }
        }
        return $images;
    }
    
    public function livePosters(){
        $user = $this->user;
        if(!$user)
            return response()->json([
                "error" => "User not found"
            ], 404);
        $posters = array();
    	if(!$user->by_monitor){
            $groups = $this->groups();
            foreach ($groups as $key => $group) {
                foreach ($group->posters() as $key => $poster) {
                    if(h_isLive($poster))
                        array_push($posters, $poster);
                }
            }
        } else {
            foreach ($this->posters() as $key => $poster) {
                if(h_isLive($poster))
                    array_push($posters, $poster);
            }
        }
        return $posters;
    }
}
