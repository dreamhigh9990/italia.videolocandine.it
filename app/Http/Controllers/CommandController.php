<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Monitor;
use App\Video;
use App\Photo;
use App\AspectRatioIt;
use App\Grouptype;
use App\MonitorRedundancy;

class CommandController extends Controller
{
    public $daysTable = [
        "Monday" => "Lun",
        "Tuesday" => "Mar",
        "Wednesday" => "Mer",
        "Thursday" => "Giov",
        "Friday" => "Ven",
        "Saturday" => "Sab",
        "Sunday" => "Dom",
    ];

    public function getCommand($id){
        $monitor = Monitor::find($id);
        if(!$monitor)
            return response()->json([
                "result" => "error",
                "message" => "Can not find monitor"
            ]);
        $user = $monitor->user;
        $aspect_ratio = $monitor->aspectRatio->name;
        $group_type = $monitor->groupType->name;
        
        $videos = array();
        $images = array();
        $posters = array();
        if(!$user->by_monitor){
            $groups = $monitor->groups();
            foreach ($groups as $key => $group) {
                foreach ($group->videos() as $key => $video) {
                    if(h_isLive($video))
                        array_push($videos, $video);
                }
                foreach ($group->images() as $key => $image) {
                    if(h_isLive($image))
                        array_push($images, $image);
                }
                foreach ($group->posters() as $key => $poster) {
                    if(h_isLive($poster))
                        array_push($posters, $poster);
                }
            }
        } else {
            foreach ($monitor->videos() as $key => $video) {
                if(h_isLive($video))
                    array_push($videos, $video);
            }
            foreach ($monitor->images() as $key => $image) {
                if(h_isLive($image))
                    array_push($images, $image);
            }
            foreach ($monitor->posters() as $key => $poster) {
                if(h_isLive($poster))
                    array_push($posters, $poster);
            }
        }
        
        $slide_data = array();
        foreach($videos as $video){
            array_push($slide_data, [
                // "id" => $video->id,
                "original_name"=> "https://www.videolocandine.it/vl/public/media/videos/" . $video['original'],
                "unique_name"=> "https://www.videolocandine.it/vl/public/media/videos/" . $video['video'],
                "duration"=> $video['duration'],
                "type"=> 'video',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $video['start_time'] . ' ' . $video['start_date'],
                "end_time"=> $video['end_time'] . ' ' . $video['end_date'],
            ]);
        }
        
        foreach($images as $image){
            array_push($slide_data, [
                // "id" => $image->id,
                "original_name"=> "https://www.videolocandine.it/vl/public/media/images/" . $image['original'],
                "unique_name"=> "https://www.videolocandine.it/vl/public/media/images/" . $image['image'],
                "duration"=> $image['duration'],
                "type"=> 'image',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $image['start_time'] . ' ' . $image['start_date'],
                "end_time"=> $image['end_time'] . ' ' . $image['end_date'],
            ]);
        }

        foreach($posters as $poster){
            array_push($slide_data, [
                "unique_name"=> "https://www.videolocandine.it/vl/public/users/" . $poster['user_id'] . '/posters/' . $poster['file'],
                "duration"=> $poster['duration'],
                "type"=> 'poster',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $poster['start_time'] . ' ' . $poster['start_date'],
                "end_time"=> $poster['end_time'] . ' ' . $poster['end_date'],
            ]);
        }
        if(!count($slide_data)){
            $redundancy = MonitorRedundancy::where('monitor_id', $id)->first();
            array_push($slide_data, [
                "unique_name"=> "https://www.videolocandine.it/vl/public/media/monitor-redundancies/" . $redundancy['file'],
                "duration"=> $redundancy['duration'],
                "type"=> $redundancy['type'],
                "rotation"=> $monitor['rotation'],
            ]);
        }
        return response()->json([
                "monitor_id" => $monitor->id,
                "device_name" => $monitor->name,
                "aspect_ratio" => $aspect_ratio,
                "monitor_type" => $group_type,
                "slide_data" => $slide_data
            ]);
    }
    public function getFutureMedia($id){
        $monitor = Monitor::find($id);
        if(!$monitor)
            return response()->json([
                "result" => "error",
                "message" => "Can not find monitor"
            ]);

        $groups = $monitor->groups();
        $videos = array();
        $images = array();
        $posters = array();
        foreach ($groups as $key => $group) {
            $now = date('Y-m-d H:i:s');
            foreach ($group->videos() as $key => $video) {
                $start_time = $this->getStartTime($video);
                $end_time = $this->getEndTime($video);
                if($now < $end_time && !in_array($video, $videos))
                    array_push($videos, $video);
            }
            foreach ($group->images() as $key => $image) {
                $start_time = $this->getStartTime($image);
                $end_time = $this->getEndTime($image);
                if($now < $end_time && !in_array($image, $images))
                    array_push($images, $image);
            }
            foreach ($group->posters() as $key => $poster) {
                $start_time = $this->getStartTime($poster);
                $end_time = $this->getEndTime($poster);
                if($now < $end_time && !in_array($poster, $posters))
                    array_push($posters, $poster);
            }
        }
        $slide_data = array();
        foreach($videos as $video){
            array_push($slide_data, [
                "name"=> "https://www.videolocandine.it/vl/public/media/videos/" . $video['original'],
                "duration"=> $video['duration'],
                "type"=> 'video',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $video['start_time'] . ' ' . $video['start_date'],
                "end_time"=> $video['end_time'] . ' ' . $video['end_date'],
            ]);
        }
        
        foreach($images as $image){
            array_push($slide_data, [
                "name"=> "https://www.videolocandine.it/vl/public/media/images/" . $image['original'],
                "duration"=> $image['duration'],
                "type"=> 'image',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $image['start_time'] . ' ' . $image['start_date'],
                "end_time"=> $image['end_time'] . ' ' . $image['end_date'],
            ]);
        }

        foreach($posters as $poster){
            array_push($slide_data, [
                "name"=> "https://www.videolocandine.it/vl/public/users/" . $poster['user_name'] . '/' . $poster['file'],
                "duration"=> $poster['duration'],
                "type"=> 'poster',
                "rotation"=> $monitor['rotation'],
                "start_time"=> $poster['start_time'] . ' ' . $poster['start_date'],
                "end_time"=> $poster['end_time'] . ' ' . $poster['end_date'],
            ]);
        }
        if(!count($slide_data)){
            $redundancy = MonitorRedundancy::where('monitor_id', $id)->first();
            array_push($slide_data, [
                "name"=> "https://www.videolocandine.it/vl/public/media/monitor-redundancies/" . $redundancy['file'],
                "duration"=> $redundancy['duration'],
                "type"=> $redundancy['type'],
                "rotation"=> $monitor['rotation'],
            ]);
        }
        return response()->json([
                "monitor_id" => $monitor->id,
                "device_name" => $monitor->name,
                "slide_data" => $slide_data
            ]);
    }

    public function getStartTime($media){
        return $media->start_date . " " . $media->start_time;
        // return strtotime($media->start_date . " " . $media->start_time);
    }

    public function getEndTime($media){
        return $media->end_date . " " . $media->end_time;
    }
}
