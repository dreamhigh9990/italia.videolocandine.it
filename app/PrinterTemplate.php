<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrinterTemplate extends Model
{
    public $timestamps = false;
    public $table = 'printer_templates';

    public function user(){
    	return $this->belongsTo('App\User');
    }
}
