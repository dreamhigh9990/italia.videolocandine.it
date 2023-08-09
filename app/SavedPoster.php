<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SavedPoster extends Model
{
    public $table = 'savedposters';
    public $timestamps = false;
    public $fillable = [
    	'file', 'width', 'height'
    ];
}
