<?php

use App\Http\Controllers\AssociateController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\ZipCodeController;
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

Route::prefix('v1')->group(function () {
    Route::post('/login', [LoginController::class, 'login']);
    
    Route::middleware('auth:sanctum')->group(function() {
        Route::post('/logout', [LoginController::class, 'logout']);
        
        Route::controller(AssociateController::class)->group(function () {
            Route::get('/associates', 'all')->middleware('abilities:list-associates');
            Route::get('/associates/{id}', 'getById')->middleware('abilities:get-associates');
            Route::post('/associates', 'create')->middleware('abilities:create-associates');
            Route::put('/associates/{id}', 'update')->middleware('abilities:update-associates');
            Route::delete('/associates/{id}', 'delete')->middleware('abilities:delete-associates');
        });
        
        Route::controller(ProviderController::class)->group(function () {
            Route::get('/providers', 'all')->middleware('abilities:list-providers');
            Route::get('/providers/{id}', 'getById')->middleware('abilities:get-providers');
            Route::post('/providers', 'create')->middleware('abilities:create-providers');
            Route::put('/providers/{id}', 'update')->middleware('abilities:update-providers');
            Route::delete('/providers/{id}', 'delete')->middleware('abilities:delete-providers');
        });
    
        Route::get('zipcodes', [ZipCodeController::class, 'getZipCode']);
    });

});
