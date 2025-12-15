<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'email' => 'required|email',
            'subject' => 'required|min:3',
            'message' => 'required|min:10',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Ici vous pouvez envoyer l'email ou sauvegarder en base de données
        // Mail::to('contact@lenad-consulting.com')->send(new ContactMail($request->all()));

        return redirect()->back()->with('success', 'Message envoyé avec succès !');
    }
}

