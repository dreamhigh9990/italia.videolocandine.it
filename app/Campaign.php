<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $fillable = [
        'name', 'description', 'sponsor', 'days', 'start_time', 'end_time', 'start_date', 'end_date', 'group_type_id', 'group_ids'
    ];

    public function photos()
    {
        return $this->hasMany('App\Photo');
    }

    public function videos()
    {
        return $this->hasMany('App\Video');
    }

    public function posters()
    {
        return $this->hasMany('App\Poster');
    }
}
