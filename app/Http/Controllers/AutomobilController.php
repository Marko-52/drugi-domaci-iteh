<?php

namespace App\Http\Controllers;

use App\Automobil;
use Illuminate\Http\Request;

class AutomobilController extends Controller
{
    public function fetchuj_automobile()
    {
        $automobili = Automobil::all();

        return response()->json([
            'automobili' => $automobili
        ]);
    }

    public function iznajmljiavanja(Request $request)
    {

        $automobil_id = $request->input('automobil_id');
        if ($automobil_id) {
            $automobil = Automobil::find($automobil_id);
            $iznajmljivanja = Automobil::find($automobil_id)->iznajmljivanja()->get();

            return view('iznajmljivanja', [
                'automobil' => $automobil,
                'iznajmljivanja' => $iznajmljivanja,
            ]);
        }

        return view('automobili');
    }

    public function izbrisi_automobil(Request $request)
    {
        $id = $request->input('id');
        Automobil::find($id)->delete();
    }
}
