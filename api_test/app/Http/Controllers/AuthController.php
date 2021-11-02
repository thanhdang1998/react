<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Register(Request $request){
        $register = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    }
}
