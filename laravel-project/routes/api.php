<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todo', function() {
    return response('GET /');
});

Route::post('/todo', function() {
    return response('post /todo');
});

Route::put('/todo', function() {
    return response('update /todo');
});

Route::delete('/todo', function() {
    return response('delete /todo');
});
