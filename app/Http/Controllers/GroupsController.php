<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\AspectRatio;
use App\AspectRatioIt;
use App\Grouptype;
use App\Group;
use App\Monitor;

class GroupsController extends Controller
{
    public function init(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
        $groups = $user->groups;
    	$ratios = AspectRatioIt::all();
    	$types = Grouptype::all();
        $monitors = $user->monitors;
    	return response()->json(compact('ratios', 'types', 'groups', 'monitors'));
    }
    public function addNew(Request $request){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$query = $request->all();
        $query['user_id'] = $user->id;
    	Group::insert($query);
    	return response()->json([
    		"result" => "success",
			"message" => "Added successfully"
		]);
    }
    public function getGroups(){
        $user = Auth::user();
        if(!$user){
            return response()->json([
                'result' => "error",
                'errors' => "Unauthrized user"
            ], 401);
        }
    	$groups = $user->groups;
    	return response()->json(compact('groups'));
    }
    public function update(Request $request, $id){
        $group = Group::find($id);
    	
    	$group->name = $request->name;
    	$group->group_type_id = $request->group_type_id;
    	$group->aspect_ratio_id = $request->aspect_ratio_id;
    	$group->description = $request->description;
        $group->monitor_ids = $request->monitor_ids;
    	$group->save();
    	return response()->json([
    		"result" => "success",
			"message" => "Updated successfully"
		]);
    }

    public function delete($id){
    	$group = Group::find($id);
    	$group->delete();
    	return response()->json([
    		"result" => "success",
			"message" => "Deleted successfully"
		]);
    }
}
