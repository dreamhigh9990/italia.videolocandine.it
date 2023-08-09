<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([], function () {
	Route::post('/logout', 'Auth\LoginController@logout');
	Route::post('/image-upload', 'CampaignsController@upload');

	Route::get('/user-details', 'UserController@getUserDetails');

	// Route::get('/users/load', 'UserController@getShopUsers');
	Route::get('/users/init-user-form', 'UserController@initUserForm');
	Route::get('/users/{id}', 'UserController@getUser');
	Route::get('/users', 'UserController@index');
	Route::post('/users/add-new', 'UserController@addNew');
	Route::post('/users/update/{id}', 'UserController@update');
	Route::post('/users/delete/{id}', 'UserController@delete');

	Route::get('/campaigns/load', 'CampaignsController@init');
	Route::get('/campaigns', 'CampaignsController@index');
	Route::post('/campaigns/add-new', 'CampaignsController@addNew');
	Route::get('/campaigns/edit/{id}', 'CampaignsController@edit');
	Route::post('/campaigns/update/{id}', 'CampaignsController@update');
	Route::post('/campaigns/delete/{id}', 'CampaignsController@delete');

	Route::get('/groups/load', 'GroupsController@init');
	Route::get('/groups', 'GroupsController@getGroups');
	Route::post('/groups/add-new', 'GroupsController@addNew');
	Route::post('/groups/update/{id}', 'GroupsController@update');
	Route::post('/groups/delete/{id}', 'GroupsController@delete');

	Route::get('/shops/load', 'ShopsController@init');
	Route::get('/shops', 'ShopsController@index');
	Route::get('/shop/edit-init/{id}', 'ShopsController@initEdit');
	Route::post('/shops/add-new', 'ShopsController@addNew');
	Route::post('/shops/update/{id}', 'ShopsController@update');
	Route::post('/shops/delete/{id}', 'ShopsController@delete');

	Route::get('/images/{id}', 'ImagesController@getImage');
	Route::get('/images', 'ImagesController@index');
	Route::post('/images/update/{id}', 'ImagesController@update');
	Route::post('/images/delete/{id}', 'ImagesController@delete');
	Route::get('/images-campaign/{image_id}', 'ImagesController@getImagesOfCampaign');

	Route::get('/videoss', 'VideosController@getVideos');
	Route::get('/videos/{id}', 'VideosController@getVideo');
	Route::get('/videos-load', 'VideosController@index');
	Route::post('/videos/update/{id}', 'VideosController@update');
	Route::post('/videos/delete/{id}', 'VideosController@delete');
	Route::get('/videos-campaign/{campaign_id}', 'VideosController@getVideosOfCampaign');

	Route::post('/posters/publish', 'PosterController@publish');
	Route::post('/posters/update/{id}', 'PosterController@updatePoster');
	Route::get('/posters/index', 'PosterController@index');
	Route::get('/poster-init/{id}', 'PosterController@initPoster');
	Route::get('/posters/{id}', 'PosterController@getPublishedPoster');
	Route::get('/posterss', 'PosterController@getPublishedPosters');
	Route::post('/posters/upload', 'PosterController@uploadImage');
	Route::get('/posters-bgs', 'PosterController@getBgs');
	Route::get('/posters-bg/{id}', 'PosterController@getBg');
	Route::get('/poster-editings', 'PosterController@getEditings');
	Route::get('/poster-editing/{id}', 'PosterController@getEditingPost');
	Route::post('/posters/save', 'PosterController@savePoster');
	Route::post('/posters/delete/{id}', 'PosterController@delete');
	Route::get('/get-posters', 'PosterController@getPosters');
	Route::post('/poster/toggle-favorite/{id}', 'PosterController@toggleFavorite');

	Route::post('/poster/delete-savedimage/{id}', 'PosterController@deleteSavedImage');
	Route::post('/poster/delete-savedposter/{id}', 'PosterController@deleteSavedPoster');
	Route::post('/posters/upload-prepared-image', 'PosterController@uploadSavedImage');

	Route::get('/printer/printer-templates', 'PrinterController@getPrinterTemplates');
	Route::get('/printer/saved-printers', 'PrinterController@getSavedPrinters');
	Route::get('/printer/init-create/{id}', 'PrinterController@initCreatePrinter');
	Route::post('/printer/upload-printer-images', 'PrinterController@uploadPrinterImages');
	Route::post('/printer/delete-printer-image/{id}', 'PrinterController@deletePrinterImage');
	Route::post('/printer/save', 'PrinterController@savePrinter');
	Route::post('/printer/publish', 'PrinterController@publishPrinter');
	Route::get('/printer/printers', 'PrinterController@getPrinters');
	Route::get('/printer/init-edit-printer/{id}', 'PrinterController@initEditPrinter');
	Route::post('/printer/delete/{id}', 'PrinterController@deletePrinter');
	Route::post('/printer/update/{id}', 'PrinterController@updatePrinter');
	Route::get('/printer/init-edit/{id}', 'PrinterController@initEditSavedPrinter');
	Route::post('/printer/delete-saved-printer/{id}', 'PrinterController@deleteSavedPrinter');
	Route::post('/printer/upload-new-image', 'PrinterController@uploadNewImage');

	Route::post('/helper/aspect-ratio-id', 'PosterController@getAspectRatio');
	Route::get('cmdslider/{id}', array('as'=>'cmdslider','uses'=>'CommandController@getCommand'));
	Route::get('cmd-future-sliders/{id}', array('as'=>'cmd-future-slider','uses'=>'CommandController@getFutureMedia'));
});

Route::group(['middleware' => 'auth'], function () {
	Route::get('/rooms/load', 'RoomController@init');

	Route::get('/settings/init', 'SettingsController@init');
	Route::post('/settings/update-by-monitor', 'SettingsController@updateByMonitor');

	Route::post('/change-password', 'UserController@changeShopManagerPassword');

	//
	Route::get('/monitors-and-groups', 'MonitorsController@getMonitorsGroups');

	Route::get('/monitors/load', 'MonitorsController@init');
	Route::get('/monitors', 'MonitorsController@getMonitors');
	Route::post('/monitors/add-new', 'MonitorsController@addNew');
	Route::post('/monitors/update/{id}', 'MonitorsController@update');
	Route::post('/monitors/delete/{id}', 'MonitorsController@delete');
	Route::post('/monitors/upload-redundancy/{id}', 'MonitorsController@uploadRedundancy');
	Route::get('/monitors/redundancy/{id}', 'MonitorsController@getMonitorRedundancy');

	Route::post('/campaigns/update-date/{id}', 'CampaignsController@updateDate');
});

Route::group(['middleware' => 'superadmin'], function () {
	Route::post('/superadmin-logout', 'SuperadminAuth\LoginController@logout');

	Route::get('/super-admin-141592/users', 'UserController@getAllUsers');
	Route::post('/super-admin-141592/delete-user/{id}', 'SuperadminController@deleteUser');
	Route::post('/super-admin-141592/change-password', 'UserController@changeSuperAdminPassword');

	Route::post('/super-admin-141592/update-user-info/{id}', 'UserController@changeUserInfo');
	
	Route::get('/super-admin-141592/init-user-edit/{id}', 'FontController@initUserEdit');
	Route::post('/super-admin-141592/update-user-fonts/{id}', 'FontController@updateUserFonts');

	// Route::post('/super-admin-141592/update-format', 'FontController@updateFormat');
	Route::post('/super-admin-141592/upload-format', 'FontController@uploadFormat');
	Route::delete('/super-admin-141592/delete-format-template/{id}', 'SuperadminController@deleteFormatTemplate');


	Route::get('/super-admin-141592/printer-template/init/{user_id}', 'PrinterController@init');
	Route::post('/super-admin-141592/printer-template/upload', 'PrinterController@uploadPrinter');
	Route::delete('/super-admin-141592/delete-printer-template/{id}', 'SuperadminController@deletePrinterTemplate');

	Route::get('/super-admin-141592/init-new-shopmanager', 'SuperadminController@initNewShopManager');
	Route::post('/super-admin-141592/create-new-shopmanager', 'SuperadminController@createNewShopManager');


});