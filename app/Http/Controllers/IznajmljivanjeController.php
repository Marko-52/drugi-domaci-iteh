<?php

namespace App\Http\Controllers;

use App\Iznajmljivanje;
use Illuminate\Http\Request;

class IznajmljivanjeController extends Controller
{
    public function izmeni_datum(Request $request)
    {
        $id = $request->input('id');
        $datum_iznajmljen_do = $request->input('datum_iznajmljen_do');
        $total_cena_iznajmljivanja = $request->input('total_cena_iznajmljivanja');
        $broj_dana_iznajmljivanja = $request->input('broj_dana_iznajmljivanja');
        Iznajmljivanje::where('id', $id)->update([
            'datum_iznajmljen_do' => $datum_iznajmljen_do,
            'total_cena_iznajmljivanja' => $total_cena_iznajmljivanja,
            'broj_dana_iznajmljivanja' => $broj_dana_iznajmljivanja,
        ]);

        return view('automobili');
    }

    public function iznajmi_automobil(Request $request)
    {
        $automobil_id = $request->input('automobil_id');
        $datum_iznajmljen_od = $request->input('datum_iznajmljen_od');
        $datum_iznajmljen_do = $request->input('datum_iznajmljen_do');
        $total_cena_iznajmljivanja = $request->input('total_cena_iznajmljivanja');
        $broj_dana_iznajmljivanja = $request->input('broj_dana_iznajmljivanja');

        Iznajmljivanje::insert([
            'automobil_id' => $automobil_id,
            'datum_iznajmljen_od' => $datum_iznajmljen_od,
            'datum_iznajmljen_do' => $datum_iznajmljen_do,
            'total_cena_iznajmljivanja' => $total_cena_iznajmljivanja,
            'broj_dana_iznajmljivanja' => $broj_dana_iznajmljivanja,
        ]);
    }
}
