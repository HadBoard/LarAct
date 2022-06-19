<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller
{

    public function welcome() {
        return view('welcome');
    }

    public function sample() {
        return view('sample');
    }

    public function hw() {
        return view('hw');
    }

}
