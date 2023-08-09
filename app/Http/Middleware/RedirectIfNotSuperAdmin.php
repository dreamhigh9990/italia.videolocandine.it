<?php
namespace App\Http\Middleware;
use Closure;

class RedirectIfNotSuperAdmin
{
    public function handle($request, Closure $next, $guard="superadmin")
    {
        if(!auth()->guard($guard)->check()) {
            return redirect(route('super-admin.login'));
        }
        return $next($request);
    }
}