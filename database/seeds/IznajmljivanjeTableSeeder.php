<?php

use App\Automobil;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class IznajmljivanjeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 15; $i++) {
            $datum1 =  strtotime("2021-1-26 00:00:00");
            $datum2 = strtotime("2021-3-24 00:00:00");
            $iznajmljen_od = rand($datum1, $datum2);
            $iznajmljen_do = rand($iznajmljen_od, $datum2);
            $cena_po_danu = Automobil::find($i)->cena_po_danu;
            $broj_iznajmljenih_dana = intval(($iznajmljen_do - $iznajmljen_od) / (24 * 60 * 60));
            $total_cena_iznajmljivanja = $cena_po_danu * $broj_iznajmljenih_dana;

            DB::table('iznajmljivanje')->insert([
                'datum_iznajmljen_od' =>   $iznajmljen_od,
                'datum_iznajmljen_do' => $iznajmljen_do,
                'total_cena_iznajmljivanja' =>  $total_cena_iznajmljivanja,
                'broj_dana_iznajmljivanja' =>  $broj_iznajmljenih_dana,
                'automobil_id' => $i
            ]);
        }
    }
}
