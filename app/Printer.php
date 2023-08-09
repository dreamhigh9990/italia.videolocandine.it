<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Printer extends Model
{
    public $fillable = [
    	'file'
    ];

    public function savedPrinter()
    {
    	return SavedPrinter::where('printer_id', $this->id)->first();
    }
}
