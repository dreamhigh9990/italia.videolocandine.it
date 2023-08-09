<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class SettingsController extends Controller
{
    public function init(){
    	$user = Auth::user();
        return response()->json(compact('user'));
    }

    public function updateByMonitor(Request $request){
    	$user = Auth::user();
    	$user->by_monitor = $request->by_monitor;
    	$user->save();

        return response()->json([
        	'result' => 'success',
        	'message' => 'Successfully updated'
        ]);
    }
}
