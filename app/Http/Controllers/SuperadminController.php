<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

use App\Shop;
use App\User;
use App\Background;
use App\PrinterTemplate;

class SuperadminController extends Controller
{
	public function initNewShopManager(){
    	$shops = Shop::where('user_id', '')->get();
    	return response()->json(compact('shops'));
    }

    public function createNewShopManager(Request $request){
    	$request->validate([
		    'name' => 'required|unique:users,name',
		    'password' => 'required',
		    'email' => 'required|string|email|max:255|unique:users,email'
		]);

		$shopmanager = new User();
        $shopmanager->name = $request->name;
        $shopmanager->email = $request->email;
        $shopmanager->password = Hash::make($request->password);
        $shopmanager->fullname = $request->fullname;
        $shopmanager->role = 'shopmanager';
        $shopmanager->shopmanager_id = 0;
        $shopmanager->save();

        return response()->json([
			"result" => "success",
			"message" => "Created successfully"
		]);
    }

    public function deleteUser($id){
		$user = User::find($id);
		$user->delete();
		return response()->json([
			"result" => "success",
			"message" => "Deleted successfully"
		]);
    }

    public function deleteFormatTemplate($id){
    	$format = Background::findOrFail($id);
    	$user = $format->user;
    	if($user){
    		File::delete("./users/" . $user->name . '/formats/' . $format->file);
    		$format->delete();
    		// // File::delete("./users/" . $user->name . '/formats/thumbnail_' . $format->file);
    		$formats = $user->formats;
    		return response()->json(compact('formats'));
    	}
    }

    //delete: /api/super-admin/delete-printer-template/id
    public function deletePrinterTemplate($id){
    	$printer = PrinterTemplate::findOrFail($id);
    	$user = $printer->user;
    	if($user){
    		File::delete("./users/" . $user->name . '/printer-templates/' . $printer->file);
    		File::delete("./users/" . $user->name . '/printer-templates/thumbnail_' . $printer->file);
    		$printer->delete();
    		$printer_templates = $user->printer_templates;
    		return response()->json(compact('printer_templates'));
    	}
    }
}
