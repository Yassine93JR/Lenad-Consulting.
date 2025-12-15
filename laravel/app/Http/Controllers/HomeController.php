<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function changeLang($lang)
    {
        if (in_array($lang, ['fr', 'en'])) {
            session(['lang' => $lang]);
        }
        return redirect()->back();
    }
}

