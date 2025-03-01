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
        $user = JWTAuth::user();
        $user->load('roleable');
        if ($token) {
            return response([
                "token" => $token,
                'role' => class_basename($user->roleable_type)
            ], 201);
        } else {
            return response(["error" => "Invalid credentials"], 401);
        }
    }

    public function Me() {
        $user = JWTAuth::user();
    
        if (!$user) {
            return response()->json(['error' => 'Not authorized'], 401);
        }
    
        $info = $user->load('roleable');
    
        return response()->json([
            'role' => class_basename($user->roleable_type),
            "me"=>  $info->roleable

        ]);
    }
}
