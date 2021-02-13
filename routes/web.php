<?php

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

Route::get('/', 'PageController@automobili');

Route::get('/automobili/get', 'AutomobilController@fetchuj_automobile');
Route::delete('/automobili/delete', 'AutomobilController@izbrisi_automobil');
Route::get('/iznajmljivanja/get', 'AutomobilController@iznajmljiavanja');

Route::put('/iznajmljivanje/update', 'IznajmljivanjeController@izmeni_datum');
Route::post('/iznajmljivanja/post', 'IznajmljivanjeController@iznajmi_automobil');
