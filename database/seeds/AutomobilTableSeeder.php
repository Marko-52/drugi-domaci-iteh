<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class AutomobilTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {
            DB::table('automobil')->insert([
                'naziv_modela' =>  Str::random(7) . "-MD",
                'naziv_kompanije' =>  "Industrija-" . Str::random(6) . "-D.O.O.",
                'cena_po_danu' =>   rand(3, 10) * 700 + rand(500, 1000),
            ]);
        }
    }
}
