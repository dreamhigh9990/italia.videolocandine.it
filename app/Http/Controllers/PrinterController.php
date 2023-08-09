<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Image;
use Auth;
use Illuminate\Support\Facades\File;

use App\User;
use App\PrinterTemplate;
use App\Campaign;
use App\Group;
use App\Grouptype;
use App\SavedImage;
use App\SavedPrinter;
use App\Printer;

class PrinterController extends Controller
{
    public function init($user_id){
        $user = User::find($user_id);
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
        $printer_templates = $user->printer_templates;
    	return response()->json(compact('printer_templates', 'user'));
    }

    public function uploadPrinter(Request $request){
    	$user = User::find($request->user_id);
        if(!$user){
            return response()->json([
                'result' => "fail",
                'message' => "User not found",
            ]);
        }
        $uploadFile =  $request->printer;
        if(!$uploadFile) return;
        $original = $uploadFile->getClientOriginalName();
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $destinationPath = 'users/' . $user->name . '/printer-templates';
        $uploadFile->move($destinationPath, $filename);
        $this->createThumbnailImage($destinationPath, $filename);

        list($width, $height) = getimagesize($destinationPath . '/' . $filename);

        $printer['user_id'] = $user->id;
        $printer['file'] = $filename;
        $printer['height'] = $height;
        $printer['width'] = $width;
        $printer['status'] = 0;
        $id = PrinterTemplate::insertGetId($printer);

        return response()->json([
            'id' => $id,
            'file' => $filename,
            'width' => $width,
            'height' => $height,
        ]);
    }

    //get: /api/printer/printer-templates
    public function getPrinterTemplates(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $printer_templates = $user->printer_templates;
        return response()->json(compact('user', 'printer_templates'));
    }

    //get: /api/printer/saved-printers
    public function getSavedPrinters(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $saved_printers = $user->savedPrinters;
    	return response()->json(compact('saved_printers'));
    }

    public function initCreatePrinter($id){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$bg = PrinterTemplate::find($id);
        $campaigns = Campaign::all();
        $groups = Group::all();
        $group_types = GroupType::all();
        $prepared_images = $user->PrinterImages;
        $fonts = $user->fonts;

    	return response()->json(compact('bg', 'campaigns', 'group_types', 'groups', 'prepared_images', 'fonts', 'user'));
    }

    public function uploadPrinterImages(Request $request){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $uploadFile =  $request->image;
        if(!$uploadFile){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }

        $destinationPath = 'users/' . $user->name . '/saved images';
        $original = $uploadFile->getClientOriginalName();
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $uploadFile->move($destinationPath, $filename);
        
        $this->createThumbnailImage($destinationPath, $filename);

        $image['file'] = $filename;
        $image['user_name'] = $user->name;
        $image['thumbnail'] = 'thumbnail_' . $filename;
        SavedImage::insert($image);
        $prepared_images = $user->printerImages;
        return response()->json(compact('prepared_images'));
    }

    //post: /api/printer/delete-printer-image
    public function deletePrinterImage($id){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $printer_image = SavedImage::find($id);
        if(!$printer_image){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }

        $printer_image->delete();
        File::delete("./users/" . $user->name . '/saved images/' . $printer_image->file);
        File::delete("./users/" . $user->name . '/saved images/' . $printer_image->thumbnail);
        $prepared_images = $user->printerImages;

        return response()->json(compact('prepared_images'));
    }

    //post: /api/printer/save
    public function savePrinter(Request $request){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

    	$printer['json_data'] = $request->json_data;
    	$data = $request->image;
    	if(preg_match('/data:image\/(gif|jpeg|png);base64,(.*)/i', $data, $matches))
		{
			$imageType = $matches[1];
			$imageData = base64_decode($matches[2]);

			$image = imagecreatefromstring($imageData);
			$filename = uniqid() . '.png';
            if(!file_exists('users/' . $user->name . '/printers/')){
                mkdir('users/' . $user->name . '/printers', 0777);
            }
			if(imagepng($image, 'users/' . $user->name . '/printers/' . $filename))
			{
    			if($request->edit_flag == 'edited'){
    				$saved_printer = SavedPrinter::find($request->id);
    				$saved_printer->image = $filename;
                    $saved_printer->width = $request->width;
                    $saved_printer->height = $request->height;
    				$saved_printer->json_data = $request->json_data;
    				$saved_printer->thumbnail = 'thumbnail_' . $filename;
    				$destinationPath = 'users/' . $user->name . '/printers';
                    $this->createThumbnailImage($destinationPath, $filename);
    				$saved_printer->save();

                    if($saved_printer->printer_id != -1){
                        $printer = Printer::find($saved_printer->printer_id);
                        if($printer){
                            $printer->file = $filename;
                            $printer->save();
                        }
                    }
    			} else if($request->edit_flag == 'created'){
    				$printer['image'] = $filename;
                    $printer['width'] = $request->width;
                    $printer['height'] = $request->height;
                    $printer['user_name'] = $user->name;
                    $printer['thumbnail'] = 'thumbnail_' . $filename;
                    $destinationPath = 'users/' . $user->name . '/printers';
                    $this->createThumbnailImage($destinationPath, $filename);
					SavedPrinter::insert($printer);
    			}
			} else {
			    throw new Exception('Could not save the file.');
			}
		} else {
		    throw new Exception('Invalid data URL.');
		}
    }

    //post: /api/printer/publish
    public function publishPrinter(Request $request){
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
			$filename = uniqid() . '.png';

            if(!file_exists('users/' . $user->name . '/printers/')){
                mkdir('users/' . $user->name . '/printers', 0777);
            }
			if(imagepng($image, 'users/' . $user->name . '/printers/' . $filename))
			{
                $printer = new Printer;
				$printer->file = $filename;
                $printer->duration = $request->duration;
                $printer->size = '0.012';
                $printer->start_date = $request->start_date;
                $printer->end_date = $request->end_date;
                $printer->start_time = $request->start_time;
                $printer->end_time = $request->end_time;
                $printer->name = $request->name;
                $printer->width = $request->width;
                $printer->height = $request->height;
                $printer->group_type_id = $request->group_type_id;
                $printer->campaign_id = $request->campaign_id;
                $printer->aspect_ratio_id = $request->aspect_ratio_id;
                $printer->group_ids = implode(',', $request->group_ids);
                $printer->user_name = $user->name;
                $printer->save();
                if($request->edit_flag == 'edited'){
                	$saved_printer = SavedPrinter::find($request->id);
                    $saved_printer->image = $filename;
                    $saved_printer->printer_id = $printer->id;
                    $saved_printer->json_data = $request->json_data;
                    $saved_printer->user_name = $user->name;
                	$saved_printer->save();
                } else {
                    $saved_printer['image'] = $filename;
                    $saved_printer['width'] = $request->width;
                    $saved_printer['height'] = $request->height;
                    $saved_printer['user_name'] = $user->name;
                    $saved_printer['printer_id'] = $printer->id;
                    $saved_printer['json_data'] = $request->json_data;
                    $saved_printer['thumbnail'] = 'thumbnail_' . $filename;
                    $destinationPath = 'users/' . $user->name . '/printers';
                    $this->createThumbnailImage($destinationPath, $filename);
                    SavedPrinter::insert($saved_printer);
                }
			} else {
			    throw new Exception('Could not save the file.');
			}
		} else {
		    throw new Exception('Invalid data URL.');
		}
    }

    public function getPrinters(){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $printers = $user->printers;
        $groups = Group::all();
        return response()->json(compact('printers', 'groups'));
    }

    public function initEditPrinter($id){
    	$printer = Printer::findOrFail($id);
        $groups = Group::all();
        $saved_printer_id = $printer->savedPrinter()->id;
        return response()->json(compact('printer', 'groups', 'saved_printer_id'));
    }

    public function deletePrinter($id){
    	$printer = Printer::findOrFail($id);
        $printer->delete();
        $printers = $user->printers;
        return response()->json(compact('printers'));
    }

    //post: /api/printer/update/{id}
    public function updatePrinter(Request $request, $id){
    	$printer = Printer::find($id);
        $printer->name = $request->name;
        $printer->start_time = $request->start_time;
        $printer->start_date = $request->start_date;
        $printer->end_time = $request->end_time;
        $printer->end_date = $request->end_date;
        $printer->duration = $request->duration;
        $printer->group_ids = implode(',', $request->group_ids);
        $printer->save();
        return response()->json([
            "result" => "success",
            "message" => "Shop updated successfully"
        ]);
    }

    public function initEditSavedPrinter($id){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$printer = SavedPrinter::find($id);

        $campaigns = Campaign::all();
        $groups = Group::all();
        $group_types = GroupType::all();
        $fonts = $user->fonts;
        $prepared_images = $user->printerImages;

    	return response()->json(compact('printer' , 'campaigns', 'group_types', 'groups', 'prepared_images', 'fonts', 'user'));
    }

    public function deleteSavedPrinter($id){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }

        $saved_printer = SavedPrinter::find($id);
        if(!$saved_printer){
            return response()->json([
                'result' => "error",
                'errors' => "No file"
            ], 404);
        }
        if($saved_printer->printer_id != -1){
            $printer = Printer::find($saved_printer->printer_id);
            if($printer)
                $printer->delete();
        }
        $saved_printer->delete();
        File::delete("./users/" . $user->name . '/printers/' . $saved_printer->image);
        File::delete("./users/" . $user->name . '/printers/' . $saved_printer->thumbnail);
        $saved_printers = $user->savedPrinters;

        return response()->json(compact('saved_printers'));
    }

    public function uploadNewImage(Request $request){
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
        $filename = uniqid() . "." . $uploadFile->getClientOriginalExtension();
        $uploadFile->move($destinationPath, $filename);
        return response()->json([
        	'file' => $filename
        ]);
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
}
