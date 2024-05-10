<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return Inertia::render('students/index', ['students' => $students]);
    }

    public function create()
    {
        return Inertia::render('students/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
        ]);

        Student::create($request->all());

        return redirect()->route('students.index');
    }
    public function edit(Student $student)
    {
        return Inertia::render('students/Edit', ['student' => $student]);
    }
    public function update(Request $request, Student $student)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            // update email validation rule
            'email' => 'required|email|unique:students,email,' . $student->id . '|max:255',

            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
        ]);

        $student->update($request->all());

        return redirect()->route('students.index');
    }
    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->route('students.index');
    }
}
