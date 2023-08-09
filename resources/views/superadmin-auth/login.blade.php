<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Media Manager</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    <!-- Styles -->
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
    <link href="{{ asset('bootstrap/css/bootstrap.css') }}" rel="stylesheet">
    <style type="text/css">
        .login-body{
            background: url(../static/login-background.jpg) no-repeat center center fixed;
            background-size: cover;
        }
    </style>
</head>
<body class="login-body">
    <div id="app" class="mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <img src="../static/logo.png" width="460px" height="150px" style="padding: 20px">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">{{ __('SuperAdmin Login') }}</div>

                        <div class="card-body">
                            <form method="POST" action="{{ route('super-admin.login.post') }}">
                                @csrf
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Email') }}</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>


                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Login') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="text-center" style="font-weight: 500; color: white; font-size: 13px">
                        <p>MAINSON HAP SRL. Via Alessandro Manzoni 42 Carpi (MO) 41012 . P.IVA</p>
                        <p>IT03680650367 . REA MO 408530 . PEC maisonhapsrl@legalmail.it . Tutti i dirtti riservati 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
