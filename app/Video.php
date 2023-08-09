<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'video', 'original', 'start_date', 'start_time', 'end_date', 'end_time', 'duration', 'aspect_ratio_id', 'width', 'height', 'days', 'campaign_id', 'size', 'monitor_ids'
    ];
}
