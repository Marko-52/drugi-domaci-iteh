<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class IznajmljivanjeToAutomobil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('iznajmljivanje', function (Blueprint $table) {
            $table->unsignedbigInteger('automobil_id');
            $table->foreign('automobil_id')->references('id')->on('automobil')->onDelete('cascade');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('iznajmljivanje', function (Blueprint $table) {
            $table->dropForeign(['automobil_id']);
        });
    }
}
