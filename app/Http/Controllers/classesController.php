<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\classes;
use Inertia\Inertia;

class classesController extends Controller
{
    public function index()
    {
        $classes = classes::all();
        return Inertia::render('classes/index', ['classes' => $classes]);
    }

    public function create()
    {
        return Inertia::render('classes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'code' => 'required|string|max:255',
        ]);

        classes::create($request->all());

        return redirect()->route('classes.index');
    }

    public function edit(classes $class)
    {
        return Inertia::render('classes/Edit', ['class' => $class]);
    }

    public function update(Request $request, classes $class)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'code' => 'required|string|max:255',
        ]);

        $class->update($request->all());

        return redirect()->route('classes.index');
    }

    public function destroy(classes $class)
    {
        $class->delete();

        return redirect()->route('classes.index');
    }

    public function show(classes $class)
    {
        return Inertia::render('classes/Show', [
            'class' => $class
        ]);
    }
}
