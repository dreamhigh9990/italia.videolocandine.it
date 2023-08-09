<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;

use App\User;

class UserController extends Controller
{
	public function getUserDetails(){
		$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	return response()->json(compact('user'));
    }
    public function initUserForm(){
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
    	$users = $user->getShopClients();
    	return response()->json(compact('users'));
    }

	public function addNew(Request $request){
		$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        if($user->role != 'shopmanager'){
        	return response()->json([
                'result' => "error",
                'errors' => "Not shop manager"
            ], 401);
        }
		$query = $request->all();
		$query['shopmanager_id'] = $user->id;
		$query['password'] = Hash::make($request->password);
		User::insert($query);
		return response()->json([
			"result" => "success",
			"message" => "Shop added successfully"
		]);
	}

	public function update(Request $request, $id){
	  	$user = User::find($id);
	  	$user->name = $request->name;
	  	$user->fullname = $request->fullname;
	  	$user->email = $request->email;
	  	$user->role = $request->role;
	  	$user->shop_ids = $request->shop_ids;
	  	$user->by_monitor = $request->by_monitor;
	  	if(!empty($request->password))
	  		$user->password = Hash::make($request->password);
	  	$user->save();
	  	return response()->json([
	  		"result" => "success",
			"message" => "Shop updated successfully"
		]);
	}

	public function delete($id){
		$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
		$user = User::find($id);
		$user->delete();
		return response()->json([
			"result" => "success",
			"message" => "Deleted successfully"
		]);
	}

	public function getAllUsers(){
    	$users = User::get();
    	return response()->json(compact('users'));
    }

    public function changeSuperAdminPassword(Request $request){
    	$user = Auth::guard('superadmin')->user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $request->validate([
		    'password' => 'required|confirmed'
		]);
		$user->password = Hash::make($request->password);
		$user->save();
    	return response()->json([
			"result" => "success",
			"message" => "Updated successfully"
		]);
    }

    public function changeShopManagerPassword(Request $request){
    	$user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $request->validate([
		    'password' => 'required|confirmed'
		]);
		$user->password = Hash::make($request->password);
		$user->save();
    	return response()->json([
			"result" => "success",
			"message" => "Updated successfully"
		]);
    }

    public function changeUserInfo($id, Request $request){
        $request->validate([
		    'password' => 'required',
		    'email' => 'required|string|email|max:255|unique:users,email,' . $id
		]);
		$user = User::find($id);
		if($user){
			$user->password = Hash::make($request->password);
			$user->email = $request->email;
			$user->save();
	    	return response()->json([
				"result" => "success",
				"message" => "Updated successfully"
			]);
		} else {
			return response()->json([
				"result" => "error",
				"message" => "Can not find user."
			]);
		}
    }
}
