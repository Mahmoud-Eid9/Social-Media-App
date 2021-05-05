<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
    public function index(Request $request)
    {
        $user= User::where('email', $request->email)->first();

        // if (!$user || !Hash::check($request->password, $user->password)) {
        //     return response([
        //         'message' => ['These credentials do not match our records.']
        //     ], 404);
        // }

        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)){
            return "sorry faield";
        }
    
        $token = Auth::user()->createToken('my-app-token')->plainTextToken;
    
        $response = [
            'user' => Auth::user(),
            'token' => $token
        ];
    
            return response($response, 201);
    }

    public function Register(Request $request){

        $validator = $request->validate([
            'name'      =>  'required',
            'email'     =>  'email|required',
            'password'  =>  'required|min:8'
        ]);

        User::insert([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)){
            return "sorry faield";
        }
    
        $token = Auth::user()->createToken('my-app-token')->plainTextToken;
    
        $response = [
            'user' => Auth::user(),
            'token' => $token
        ];
    
            return response($response, 201);
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();

        return response()->json('logged out', 201);
    }

    public function users(Request $request){

        $user = User::find(1);

        return $user;
    }
}
