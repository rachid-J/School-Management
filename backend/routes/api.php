<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/user')->group( function () {
    Route::post('/login',[UserController::class,"Login"]);

});

Route::middleware("auth:api")->prefix('/user')->group(function(){
        Route::post('/logout',[UserController::class,"Logout"]);
        Route::get('/me',[UserController::class,"Me"]);
});