<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function submit(Request $request): JsonResponse
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'family' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->messages(),
            ]);
        }

        $form = new Form();
        $form->name = $request->get('name');
        $form->family = $request->get('family');
        $form->save();

        return response()->json([
            'status' => true,
            'errors' => $validator->messages(),
        ]);
    }
}
