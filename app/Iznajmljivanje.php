<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Iznajmljivanje extends Model
{
    protected $table = "iznajmljivanje";
    public $timestamps = false;

    public function automobili()
    {
        return $this->belongsTo('App\Automobil');
    }
}
