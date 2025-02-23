<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
   
    public function Login(Request $request)
    {
        $validated = $request->validate([
            "email"    => "required|email",
            "password" => "required|string",
        ]);
    
        $token = JWTAuth::attempt($validated);
        if ($token) {
          
            
            $user = JWTAuth::user()->load('roleable');
           
            return response([
                "token" => $token,
                "user"  => $user,
                "role" => class_basename($user->roleable_type)
            ], 201);
        } else {
            return response(["error" => "Invalid credentials"], 401);
        }
    }
}
