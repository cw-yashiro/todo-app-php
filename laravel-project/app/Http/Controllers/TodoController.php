<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Todo;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::all();
        return request()->json($todos, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $todo = Todo::create([
            'name' => $request->name,
            'is_done' => 0
        ]);
        return response()->json(
            $todo, 201
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        logger($request);
        $update = [
            'name' => $request->name,
            'is_done' => $request->is_done
        ];
        $todo = Todo::where('id', $id)->update($update);
        $todos = Todo::all();
        if ($todo) {
            return response()->json(
                $todos
            , 200);
        } else {
            return response()->json([
                'message' => 'todo not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
