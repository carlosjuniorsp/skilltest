<?php

namespace App\Exceptions;

use Exception;

class ClientException extends Exception
{
    /**
     * @return JsonResponse|Response|\Symfony\Component\HttpFoundation\Response
     */
    public function render()
    {
        return response()->json([
            'status' => '404',
            'error' => "Dados não encontrados",
            'data' => [],
        ]);
    }
}
