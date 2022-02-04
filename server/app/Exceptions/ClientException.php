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
            'error' => [
                'status' => 'failed',
                'details' => $this->getMessage()
            ]
        ], 404);
    }
}
