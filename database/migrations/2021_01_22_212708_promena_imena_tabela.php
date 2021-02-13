<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PromenaImenaTabela extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('automobils', 'automobil');
        Schema::rename('iznajmljivanjes', 'iznajmljivanje');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename('iznajmljivanje', 'iznajmljivanjes');
        Schema::rename('automobil', 'automobils');
    }
}
