<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllTasks() {
        // logic to get all task goes here
    }
    
    public function createTask(Request $request) {
        // logic to create a task record goes here
    }
    
    public function updateTask(Request $request, $id) {
        // logic to update a task record goes here
    }
    
    public function deleteTask ($id) {
        // logic to delete a task record goes here
    }
}
