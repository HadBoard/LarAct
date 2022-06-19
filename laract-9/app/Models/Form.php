<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Form extends Eloquent
{
    /**
     * @var mixed
     */
    protected $connection = 'mongodb';
    protected $collection = 'test';

    protected $fillable = [
        'name', 'family'
    ];
}
