<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('cmdslider/{id}', array('as'=>'cmdslider','uses'=>'CommandController@getCommand'));

Auth::routes();

Route::get('419', function () {
	return view('errors.419');
});
Route::get('home', function () {
	return redirect('/admin/dashboard');
});
Route::get('/', function () {
	return redirect('/admin/dashboard');
});
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {
	Route::get('/{vue?}', function () {
	    return view('home');
	})->where('vue', '[\/\w\.-]*')->name('admin');
});

Route::get('/super-admin-141592/login', 'SuperadminAuth\LoginController@showLoginForm')->name('super-admin.login');
Route::post('/super-admin-141592/login', 'SuperadminAuth\LoginController@login')->name('super-admin.login.post');
Route::post('/super-admin-141592/logout', 'SuperadminAuth\LoginController@logout')->name('super-admin.logout');

Route::get('super-admin-141592', function () {
	return redirect('super-admin-141592/users');
});

Route::group(['prefix' => 'super-admin-141592', 'middleware'=>'superadmin'], function() {
	Route::get('/{vue?}', function () {
	    return view('superadmin');
	})->where('vue', '[\/\w\.-]*')->name('superadmin');
});
