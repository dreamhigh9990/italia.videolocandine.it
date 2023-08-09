<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;
use Image;

use App\Poster;
use App\Background;
use App\SavedPoster;
use App\Group;
use App\Campaign;
use App\Grouptype;
use App\AspectRatio;
use App\SavedImage;
use App\Sticker;
use App\Validator;

class PosterController extends Controller
{
    public function publish(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$data = $request->image;

    	if(preg_match('/data:image\/(gif|jpeg|png);base64,(.*)/i', $data, $matches))
		{
			$imageType = $matches[1];
			$imageData = base64_decode($matches[2]);

			$image = imagecreatefromstring($imageData);
			$filename = md5($imageData) . '.png';

            if(!file_exists('users/' . $user->id . '/posters/')){
                mkdir('users/' . $user->id . '/posters', 0777, true);
            }
			if(imagepng($image, 'users/' . $user->id . '/posters/' . $filename))
			{
                $poster = new Poster;
				$poster->file = $filename;
                $poster->duration = $request->duration;
                $poster->size = '0.012';
                $poster->start_date = $request->start_date;
                $poster->end_date = $request->end_date;
                $poster->start_time = $request->start_time;
                $poster->end_time = $request->end_time;
                $poster->name = $request->name;
                $poster->width = $request->width;
                $poster->height = $request->height;
                $poster->group_type_id = $request->group_type_id;
                $poster->campaign_id = $request->campaign_id;
                $poster->aspect_ratio_id = $request->aspect_ratio_id;
                $poster->group_ids = implode(',', $request->group_ids);
                $poster->user_id = $user->id;
                $poster->save();
                if($request->edit_flag == 'edited'){
                	$saved_poster = SavedPoster::find($request->id);
                    $saved_poster->image = $filename;
                    $saved_poster->poster_id = $poster->id;
                    $saved_poster->json_data = $request->json_data;
                    $saved_poster->user_id = $user->id;
                	$saved_poster->save();
                } else {
                    $saved_poster['image'] = $filename;
                    $saved_poster['width'] = $request->width;
                    $saved_poster['height'] = $request->height;
                    $saved_poster['user_id'] = $user->id;
                    $saved_poster['poster_id'] = $poster->id;
                    $saved_poster['json_data'] = $request->json_data;
                    SavedPoster::insert($saved_poster);
                }
			} else {
			    throw new Exception('Could not save the file.');
			}
			} else {
			    throw new Exception('Invalid data URL.');
		}
    }

    public function index(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $posters = $user->posters;
        $groups = Group::all();
        return response()->json(compact('posters', 'groups'));
    }
    public function getPosters(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $posters = $user->posters;
        return response()->json(compact('posters'));
    }
    public function getPublishedPosters(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $posters = $user->posters;
    	return response()->json(compact('posters'));
    }
    public function getPublishedPoster($id){
        $poster = Poster::find($id);
        return response()->json(compact('poster'));
    }
    
    public function getBgs(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
    	$formats = $user->formats;
    	return response()->json(compact('formats', 'user'));
    }

    public function getBg($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$bg = Background::find($id);
        $campaigns = $user->campaigns;
        $groups = $user->groups;
        $group_types = Grouptype::all();
        $prepared_images = $user->SavedImages;
        $fonts = $user->fonts;

    	return response()->json(compact('bg', 'campaigns', 'group_types', 'groups', 'prepared_images', 'fonts', 'user'));
    }

    public function uploadImage(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$uploadFile =  $request->image;
        if(!$uploadFile) return;
    	$destinationPath = 'users/' . $user->name . '/';
        $original = $uploadFile->getClientOriginalName();
        $filename = $original . "---" . uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $uploadFile->move($destinationPath, $filename);
        return response()->json([
        	'file' => $filename
        ]);
    }

    public function savePoster(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

    	$poster['json_data'] = $request->json_data;
    	$data = $request->image;
    	if(preg_match('/data:image\/(gif|jpeg|png);base64,(.*)/i', $data, $matches))
		{
			$imageType = $matches[1];
			$imageData = base64_decode($matches[2]);

			$image = imagecreatefromstring($imageData);
			$filename = md5(Carbon::now()->toDateTimeString()) . '.png';
            if(!file_exists('users/' . $user->id . '/posters/')){
                mkdir('users/' . $user->id . '/posters', 0777, true);
            }
			if(imagepng($image, 'users/' . $user->id . '/posters/' . $filename))
			{
    			if($request->edit_flag == 'edited'){
    				$saved_poster = SavedPoster::find($request->id);
    				$saved_poster->image = $filename;
                    $saved_poster->width = $request->width;
                    $saved_poster->height = $request->height;
    				$saved_poster->json_data = $request->json_data;
    				$saved_poster->save();

                    if($saved_poster->poster_id != -1){
                        $poster = Poster::find($saved_poster->poster_id);
                        if($poster){
                            $poster->file = $filename;
                            $poster->save();
                        }
                    }
    			} else if($request->edit_flag == 'created'){
    				$poster['image'] = $filename;
                    $poster['width'] = $request->width;
                    $poster['height'] = $request->height;
                    $poster['user_id'] = $user->id;
					SavedPoster::insert($poster);
    			}
			} else {
			    throw new Exception('Could not save the file.');
			}
			} else {
			    throw new Exception('Invalid data URL.');
		}
    }

    public function getEditings(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        // $images = SavedPoster::where('status', 'unpublished')->get();
        $images = $user->savedPosters;
    	return response()->json(compact('images'));
    }

    public function getEditingPost($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$poster = SavedPoster::find($id);

        $campaigns = Campaign::all();
        $groups = Group::all();
        $group_types = Grouptype::all();
        $fonts = $user->fonts;
        $prepared_images = $user->SavedImages;

    	return response()->json(compact('poster' , 'campaigns', 'group_types', 'groups', 'prepared_images', 'fonts', 'user'));
    }

    public function initPoster($id){
        $poster = Poster::find($id);
        $groups = Group::all();
        $saved_poster_id = $poster->savedPoster()->id;
        return response()->json(compact('poster', 'groups', 'saved_poster_id'));
    }
    public function updatePoster(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $this->validate($request, [
            'duration' => 'numeric|min:2'
        ]);
        $poster = Poster::find($id);
        // $poster->name = $request->name;
        $poster->start_time = $request->start_time;
        $poster->start_date = $request->start_date;
        $poster->end_time = $request->end_time;
        $poster->end_date = $request->end_date;
        $poster->duration = $request->duration;
        $poster->days = $request->days;
        // $poster->group_ids = implode(',', $request->group_ids);
        // $poster->monitor_ids = implode(',', $request->monitor_ids);
        $poster->group_ids = $user->by_monitor == '0' ? $request->group_ids : '';
        $poster->monitor_ids = $user->by_monitor == '0' ? $this->getMonitorIdsFromGroupIds($request->group_ids) : $request->monitor_ids;
        $poster->save();
        return response()->json([
            "result" => "success",
            "message" => "Updated successfully"
        ]);
    }

    public function getAspectRatio(Request $request){
        $ratios = AspectRatio::all();
        $ratioString = $request->width . 'x' . $request->height;
        foreach ($ratios as $key => $ratio) {
            if(strpos($ratio->name, $ratioString) !== false){
                return $ratio->id;
            }
        }
        return 0;
    }

    public function delete($id){
        $poster = Poster::find($id);
        $poster->delete();
        return response()->json([
            "result" => "success",
            "message" => "Deleted successfully"
        ]);
    }

    public function uploadSavedImage(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $uploadFile =  $request->image;
        $destinationPath = 'users/' . $user->name . '/saved images';
        if(!$uploadFile){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }
        $original = $uploadFile->getClientOriginalName();
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $uploadFile->move($destinationPath, $filename);
        
        $this->createThumbnailImage($destinationPath, $filename);

        $image['file'] = $filename;
        $image['user_name'] = $user->name;
        $image['thumbnail'] = 'thumbnail_' . $filename;
        SavedImage::insert($image);
        $prepared_images = $user->SavedImages;
        return response()->json(compact('prepared_images'));
    }

    public function deleteSavedImage($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $saved_image = SavedImage::find($id);
        if(!$saved_image){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }
        $saved_image->delete();
        File::delete("./users/" . $user->name . '/saved images/' . $saved_image->file);
        File::delete("./users/" . $user->name . '/saved images/' . $saved_image->thumbnail);
        $prepared_images = $user->SavedImages;

        return response()->json(compact('prepared_images'));
    }

    public function deleteSavedPoster($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $saved_poster = SavedPoster::find($id);
        if(!$saved_poster){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }
        if($saved_poster->poster_id != -1){
            $poster = Poster::find($saved_poster->poster_id);
            if($poster)
                $poster->delete();
        }
        $saved_poster->delete();
        File::delete("./users/" . $user->name . '/posters/' . $saved_poster->image);
        $images = $user->savedPosters;

        return response()->json(compact('images'));
    }

    public function createThumbnailImage($destinationPath, $filename){
        $data = getimagesize($destinationPath . '/' . $filename);
        $width = $data[0];
        $height = $data[1];
        $new_width = 100;
        $new_height = $height * $new_width / $width;
        $img = Image::make($destinationPath . '/' . $filename)->resize($new_width, $new_height);
        $img->save($destinationPath . '/thumbnail_' . $filename);
    }

    public function getMonitorIdsFromGroupIds($group_ids_str){
        $group_ids = explode(',', $group_ids_str);
        $monitor_ids = array();
        foreach ($group_ids as $key => $group_id) {
            $group = Group::find((int)$group_id);
            $monitor_ids_ = $group->monitor_ids;
            $monitor_ids = array_merge($monitor_ids, explode(',', $group->monitor_ids));
        }
        return implode(',', $monitor_ids);
    }
    public function toggleFavorite(Request $request, $id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $poster = SavedPoster::find($id);
        $poster->is_favorite = $request->is_favorite;
        $poster->save();

        return response()->json([
            'result' => "success",
            'message' => "Successfully changed"
        ]);
    }
}
