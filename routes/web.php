<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\classesController;
use function Pest\Laravel\post;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('students', StudentController::class);
    Route::post('student/{id}', [StudentController::class, 'update'])->name('student.update');
    Route::delete('student/{id}', [StudentController::class, 'destroy'])->name('student.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('users', UserController::class);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('classes', classesController::class);
    Route::post('class/{id}', [classesController::class, 'update'])->name('class.update');
    Route::delete('class/{id}', [classesController::class, 'destroy'])->name('class.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('products', ProductController::class);
    Route::post('product/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');
    Route::delete('product/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
});



// Route::get('/stdclass', [STDclassController::class, 'ListClass'])->name('stdclass.ListClass');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/Category', function () {
    return Inertia::render('Category');
})->name('Category');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__ . '/auth.php';
