<?php

namespace App\Exceptions;

use Exception;

class ClientException extends Exception
{
    /**
     * @param string $erro
     * @return JsonResponse|Response|\Symfony\Component\HttpFoundation\Response
     */
    public function render(string $erro)
    {
        return response()->json([
            'status' => '404',
            'error' => "Dados não encontrados",
            'data' => [],
        ]);
    }
}
