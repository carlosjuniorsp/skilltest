<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('business-list','App\Http\Controllers\BusinessController@index');
Route::get('business-list/{id}', 'App\Http\Controllers\BusinessController@show');
Route::delete('business-delete/{id}', 'App\Http\Controllers\BusinessController@destroy');
Route::post('business-update/{id}', 'App\Http\Controllers\BusinessController@update');