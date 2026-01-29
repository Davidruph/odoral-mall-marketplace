<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function index()
    {
        $title = 'Welcome to Our Homepage';
        return inertia('Index', ['title' => $title]);
    }
}
