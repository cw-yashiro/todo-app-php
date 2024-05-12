<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllTodos() {
        // logic to get all todos goes here
    }
    
    public function createTodo(Request $request) {
        // logic to create a todo record goes here
    }
    
    public function updateTodo(Request $request, $id) {
        // logic to update a todo record goes here
    }
    
    public function deleteTodo($id) {
        // logic to delete a todo record goes here
    }
}
