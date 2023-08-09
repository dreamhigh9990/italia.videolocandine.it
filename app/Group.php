<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Video;
use App\Photo;
use App\Monitor;

class Group extends Model
{
	public $timestamps = false;
    protected $fillable = [
        'name', 'description', 'aspect_ratio_id', 'group_type_id'
    ];

    public function videos(){
    	$videos = Video::get();
    	$videos_ = array();

    	foreach ($videos as $key => $video) {
    		if(in_array($this->id, explode(',', $video->group_ids))){
    			array_push($videos_, $video);
    		}
    	}
    	return $videos_;
    }

    public function images(){
    	$images = Photo::get();
    	$images_ = array();

    	foreach ($images as $key => $image) {
    		if(in_array($this->id, explode(',', $image->group_ids))){
    			array_push($images_, $image);
    		}
    	}
    	return $images_;
    }

    public function posters(){
        $posters = Poster::get();
        $posters_ = array();

        foreach ($posters as $key => $poster) {
            if(in_array($this->id, explode(',', $poster->group_ids))){
                array_push($posters_, $poster);
            }
        }
        return $posters_;
    }
}
