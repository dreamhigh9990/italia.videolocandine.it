<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Shop;
use Auth;

class ShopsController extends Controller
{
    public function init(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$shops = $user->shops;
    	return response()->json(compact('shops'));
    }

    public function index(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$shops = $user->shops;
    	return response()->json(compact('shops'));
    }

    public function addNew(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json([
                'result' => "error",
                'errors' => $validator->errors()
            ], 400);
        }
        
        $shop = new Shop();
        $shop->user_id = $user->id;
        $shop->name = $request->name;
        $shop->description = $request->description;
        $shop->open1 = $request->start_times[0];
        $shop->open2 = $request->start_times[1];
        $shop->open3 = $request->start_times[2];
        $shop->open4 = $request->start_times[3];
        $shop->open5 = $request->start_times[4];
        $shop->open6 = $request->start_times[5];
        $shop->open7 = $request->start_times[6];
        $shop->close1 = $request->end_times[0];
        $shop->close2 = $request->end_times[1];
        $shop->close3 = $request->end_times[2];
        $shop->close4 = $request->end_times[3];
        $shop->close5 = $request->end_times[4];
        $shop->close6 = $request->end_times[5];
        $shop->close7 = $request->end_times[6];
        $shop->save();

    	return response()->json([
    		"result" => "success",
			"message" => "Shop added successfully"
		]);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json([
                'result' => "error",
                'errors' => $validator->errors()
            ], 400);
        }

    	$shop = Shop::find($id);
        $shop->name = $request->name;
        $shop->description = $request->description;
        $shop->open1 = $request->start_times[0];
        $shop->open2 = $request->start_times[1];
        $shop->open3 = $request->start_times[2];
        $shop->open4 = $request->start_times[3];
        $shop->open5 = $request->start_times[4];
        $shop->open6 = $request->start_times[5];
        $shop->open7 = $request->start_times[6];
        $shop->close1 = $request->end_times[0];
        $shop->close2 = $request->end_times[1];
        $shop->close3 = $request->end_times[2];
        $shop->close4 = $request->end_times[3];
        $shop->close5 = $request->end_times[4];
        $shop->close6 = $request->end_times[5];
        $shop->close7 = $request->end_times[6];
        $shop->save();
    	return response()->json([
    		"result" => "success",
			"message" => "Shop updated successfully"
		]);
    }

    // POST : /api/shop/edit-init
    //         id: string,
    //         locale: string
    public function initEdit($id){
        $shop = Shop::find($id);
        return response()->json(compact('shop'));
    }

    public function delete($id){
    	$shop = Shop::find($id);
    	$shop->delete();
    	return response()->json([
    		"result" => "success",
			"message" => "Shop deleted successfully"
		]);
    }
}
