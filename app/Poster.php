<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\SavedPoster;

class Poster extends Model
{
    public $fillable = [
    	'file'
    ];

    public function savedPoster()
    {
    	return SavedPoster::where('poster_id', $this->id)->first();
    }
}
