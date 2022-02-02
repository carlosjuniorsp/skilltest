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

Route::get('user-list','App\Http\Controllers\ClientController@index');
Route::get('user-list/{id}', 'App\Http\Controllers\ClientController@show');
Route::delete('user-delete/{id}', 'App\Http\Controllers\ClientController@destroy');
Route::post('user-update/{id}', 'App\Http\Controllers\ClientController@update');