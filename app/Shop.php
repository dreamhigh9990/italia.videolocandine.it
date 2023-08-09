<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'user_id', 'name', 'description', 'opan1', 'opan2', 'opan3', 'opan4', 'opan5', 'opan6', 'opan7', 'close1', 'close2', 'close3', 'close4', 'close5', 'close6', 'close7',
    ];
}
