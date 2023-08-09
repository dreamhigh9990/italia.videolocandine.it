@extends('layouts.app')

@section('content')
    <router-view locale="{{ Session::get('locale') }}"></router-view>
@endsection
