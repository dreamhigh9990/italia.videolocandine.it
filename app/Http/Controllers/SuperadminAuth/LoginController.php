<?php

namespace App\Http\Controllers\SuperadminAuth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\LanguageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = '/super-admin/users';
    
    use AuthenticatesUsers{
        login as protected traitlogin;
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:superadmin')->except('logout');
    }

    public function guard()
    {
        return Auth::guard('superadmin');
    }

    public function showLoginForm()
    {
        return view('superadmin-auth.login');
    }

    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if(Auth::guard('superadmin')->attempt(['email' => $request->email, 'password' => $request->password ], $request->remember)){
            return redirect('/super-admin-141592/users');
        }
        return redirect()->back()->withInput($request->only('email', 'remember'));
    }

    public function logout() {
        $this->guard('superadmin')->logout();
        return redirect('/super-admin-141592/login');
    }
}
