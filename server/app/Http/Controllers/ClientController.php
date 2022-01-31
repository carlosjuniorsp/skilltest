<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function show($id)
    {
        $user = Client::findOrFail($id);
        return $user;
    }

    public function destroy($id)
    {
        $user = Client::findOrFail($id);
        $user->delete($user);
    }
}
