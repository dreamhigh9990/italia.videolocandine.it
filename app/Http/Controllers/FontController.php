<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\File;

use App\Font;
use App\User;
use App\Background;

class FontController extends Controller
{
    public function initUserEdit($id){
    	$user = User::find($id);
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
    	$user_fonts = $user->fonts;
        $formats = $user->formats;
    	return response()->json(compact('user_fonts', 'formats', 'user'));
    }

    public function updateUserFonts(Request $request, $id){    	
    	$user = User::find($id);
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
    	$fonts = $request->fonts;
		
		foreach ($user->fonts as $key => $font) {
			$font->delete();
		}
        foreach ($fonts as $key => $font) {
            $font_['name'] = $font;
            $font_['user_id'] = $user->id;
            Font::insert($font_);
        }
        return response()->json([
            'result' => "fail",
            'message' => "Updated successfully",
        ]);
    }

    public function uploadFormat(Request $request){
        $user = User::find($request->user_id);
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
        $uploadFile =  $request->format;
        if(!$uploadFile) return;
        $original = $uploadFile->getClientOriginalName();
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $destinationPath = 'users/' . $user->name . '/formats';
        $uploadFile->move($destinationPath, $filename);
        list($width, $height) = getimagesize($destinationPath . '/' . $filename);

        $format['user_id'] = $user->id;
        $format['file'] = $filename;
        $format['height'] = $height;
        $format['width'] = $width;
        $format['status'] = 0;
        $id = Background::insertGetId($format);

        return response()->json([
            'id' => $id,
            'file' => $filename,
            'width' => $width,
            'height' => $height,
        ]);
    }
}
