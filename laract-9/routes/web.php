<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\FormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [SampleController::class, 'welcome']);

Route::get('/sample', [SampleController::class, 'sample']);

Route::get('/hw', [SampleController::class, 'hw']);

Route::get('/form', [SampleController::class, 'form']);

Route::post('/submit', [FormController::class, 'submit']);
