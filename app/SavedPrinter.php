<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SavedPrinter extends Model
{
    public $table = 'savedprinters';
    public $timestamps = false;
    public $fillable = [
    	'file', 'width', 'height', 'thumbnail'
    ];
}
