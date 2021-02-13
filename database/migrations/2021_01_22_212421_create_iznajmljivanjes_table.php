<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIznajmljivanjesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iznajmljivanjes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('iznajmljen')->default(false);
            $table->unsignedBigInteger('datum_iznajmljen_od');
            $table->unsignedBigInteger('datum_iznajmljen_do');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('iznajmljivanjes');
    }
}
