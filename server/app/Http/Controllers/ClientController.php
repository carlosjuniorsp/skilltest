<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Exceptions\ClientException;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function show($id)
    {
        try {
            $user = Client::find($id);
            if (!$user) {
                throw new ClientException("Erro ao carregar os dados");
            }
            return $user;
        } catch (ClientException $err) {
            throw new ClientException($err->getMessage());
        }
    }

    public function destroy($id)
    {
        $user = Client::findOrFail($id);
        $user->delete($user);
    }

    public function update($id, Request $request)
    {
        try {
            Client::findOrFail($id);
        } catch (ClientException $th) {
            return "Não encontramos nada" . $th;
        }
        //$data = $request->all();
    }
}
