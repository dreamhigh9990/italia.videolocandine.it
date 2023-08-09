<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function shops(){
        return $this->hasMany('App\Shop');
    }

    public function monitors(){
        return $this->hasMany('App\Monitor');
    }

    public function groups(){
        return $this->hasMany('App\Group');
    }

    public function campaigns(){
        return $this->hasMany('App\Campaign')->latest();
    }
 
    public function videos(){
        return $this->hasMany('App\Video')->latest();
    }

    public function images(){
        return $this->hasMany('App\Photo')->latest();
    }

    public function savedImages()
    {
        return $this->hasMany('App\SavedImage', 'user_name', 'name')->latest();
    }

    public function savedPosters()
    {
        return $this->hasMany('App\SavedPoster', 'user_id', 'id')->latest();
    }

    public function posters()
    {
        return $this->hasMany('App\Poster', 'user_id', 'id')->latest();
    }

    public function fonts(){
        return $this->hasMany('App\Font');
    }

    public function formats()
    {
        return $this->hasMany('App\Background');
    }

    public function printer_templates()
    {
        return $this->hasMany('App\PrinterTemplate');
    }

    public function savedPrinters()
    {
        return $this->hasMany('App\SavedPrinter', 'user_name', 'name')->latest();
    }

    public function printerImages()
    {
        return $this->hasMany('App\SavedImage', 'user_name', 'name')->latest();
    }

    public function printers()
    {
        return $this->hasMany('App\Printer', 'user_name', 'name');
    }

    public function getShopClients(){
        if($this->role != 'shopmanager')
            return array();
        return User::where('shopmanager_id', $this->id)->get();
    }

    public function getPosterMonitors(){
        $posters = $this->posters;

        $monitors = [];
        $group_ids = array();
        
        foreach ($posters as $key => $poster) {
            $group_ids_ = explode(',', $poster->group_ids);
            $group_ids = array_merge($group_ids, $group_ids_);
        }
        foreach ($group_ids as $key => $group_id) {
            $group = Group::find($group_id);
            $monitors_ = $group->monitors();
            foreach ($monitors_ as $key => $monitor_) {
                if(!in_array($monitor_->id, collect($monitors)->pluck('id')->all())){
                    array_push($monitors, $monitor_);
                }
            }
        }
        return $monitors;
    }

    public function getMyLiveVideos(){
        $my_videos = $this->videos;
        $ret = array();

        foreach ($my_videos as $key => $my_video) {
            if(h_isLive($my_video))
                array_push($ret, $my_video);
        }
        return $ret;
    }
}
