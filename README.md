# Laravel with React and Inertia.js

school management system how to integrate Laravel with React.js using Inertia.js.

## Prerequisites

Make sure you have the following installed on your machine:

-   PHP (>= 7.4)
-   Composer
-   Node.js (with npm or yarn)
-   MySQL or another database of your choice

## Getting Started

### Backend (Laravel)

1. Clone this repository:

    ```bash
    git clone https://github.com/your/repository.git

     cd repository
    ```

2. Install PHP dependencies:

    ```bash
    composer install

    ```

3. Create a new `.env` file by copying the `.env.example` file:

    ```bash
     cp .env.example .env
    ```

4. Generate an application key:

    ````bash
    php artisan key:generate
     ```



    ````

5. Start the development server:

    ```bash
    php artisan serve
    ```

6. Run database migrations and seeders:

    ```bash
    php artisan migrate --seed
    ```

    7 Start the Laravel development server:

    ```bash
    php artisan serve
    ```

### Frontend (React)

1. Install JavaScript dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash

     npm run dev
    ```

3. Visit `http://localhost:3000` in your browser to see the application in action.
