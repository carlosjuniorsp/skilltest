<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exceptions\BusinessException;
use App\Models\Business;

class BusinessController extends Controller
{
    public function index()
    {
        return Business::all();
    }

    public function show($id)
    {
        try {
            $user = Business::find($id);
            if (!$user) {
                throw new BusinessException("Erro ao carregar os dados");
            }
            return $user;
        } catch (BusinessException $err) {
            throw new BusinessException($err->getMessage());
        }
    }

    public function destroy($id)
    {
        $user = Business::findOrFail($id);
        $user->delete($user);
    }

    public function update($id, Request $request)
    {
        try {
            $user = Business::find($id);
            if (!$user) {
                throw new BusinessException("Erro ao carregar os dados");
            }
        } catch (BusinessException $err) {
            throw new BusinessException($err->getMessage());
        }
        //$data = $request->all();
    }
}
