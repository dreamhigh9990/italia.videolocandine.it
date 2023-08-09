<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\LanguageController;
use Illuminate\Http\Request;
use Carbon\Carbon;

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
    protected $redirectTo = '/admin/campaigns';
    
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
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $request){
        $_request =$request; 
        $lang = $request->language; 
        $langControler = new LanguageController; 
        if($lang=='English'){
            $langControler->setLocale('en');
        }else {
            $langControler->setLocale('it');
        }
        return $this->traitlogin($request, ['exp' => Carbon::now()->addDays(7)->timestamp]);
    }
    public function logout () {
        auth()->logout();
        return redirect('/login');
    }
}
