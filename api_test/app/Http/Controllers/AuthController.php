<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $rq)
    {
        $register = User::create([
            'name' => $rq->name,
            'email' => $rq->email,
            'password' => Hash::make($rq->password),
        ]);
    }

    public function login (Request $rq)
    {
        try {

            if (!Auth::attempt(['email' => $rq->email, 'password' => $rq->password])) {
                return response()->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized'
                ]);
            }

            $user = User::where('email', $rq->email)->first();

            if (!Hash::check($rq->password, $user->password, [])) {
                throw new \Exception('Error in Login');
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            $cookie = cookie('jwt',$tokenResult,60*24);
            
            return response()->json([
                'status_code' => 200,
                'jwt' => $tokenResult,
                'token_type' => 'Bearer',
            ])->withCookie($cookie);

        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ]);
        }
    }

    public function user (Request $rq)
    {
        return $rq->user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');
        
        return response()->json([
            'message' => 'success',
        ])->withCookie($cookie);
    }

    public function forgot(Request $rq)
    {
        $email = $rq->email;
        $token = Str::random(12);

        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
        ]);
    }
}
