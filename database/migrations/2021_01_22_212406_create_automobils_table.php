<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAutomobilsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('automobils', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('naziv_modela');
            $table->string('naziv_kompanije');
            $table->integer('cena_po_danu');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('automobils');
    }
}
