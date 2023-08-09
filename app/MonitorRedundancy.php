<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MonitorRedundancy extends Model
{
    public $fillable = ['file', 'monitor_id', 'duration', 'type'];
    public $table = 'monitor_redundancies';
    public $timestamps = false;
}
