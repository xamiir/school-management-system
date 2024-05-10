import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

// Sidebar component
const Sidebar = ({ user }) => {
    return (
        <div className="bg-gray-800 text-white h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
            <p className="mb-2">Welcome, {user.name}!</p>
            {/* Add more sidebar items here */}
        </div>
    );
};

export default function Dashboard({ auth }) {
    const totalUsers = 100; // Example: Total users count
    const totalCustomers = 50; // Example: Total customers count

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Dashboard
                </h2>
            }
            sidebar={<Sidebar user={auth.user} />}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-semibold mb-4">
                                Dashboard Metrics
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-blue-800">
                                        {totalUsers}
                                    </p>
                                    <p className="text-sm text-blue-600">
                                        Total Users
                                    </p>
                                </div>
                                <div className="bg-green-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-green-800">
                                        {totalCustomers}
                                    </p>
                                    <p className="text-sm text-green-600">
                                        Total Customers
                                    </p>
                                </div>
                                {/* Add more metric cards here */}
                                <div className="bg-yellow-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-yellow-800">
                                        0
                                    </p>
                                    <p className="text-sm text-yellow-600">
                                        New Orders
                                    </p>
                                </div>
                                <div className="bg-red-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-red-800">
                                        0
                                    </p>
                                    <p className="text-sm text-red-600">
                                        Pending Orders
                                    </p>
                                </div>
                                <div className="bg-purple-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-purple-800">
                                        0
                                    </p>
                                    <p className="text-sm text-purple-600">
                                        Completed Orders
                                    </p>
                                </div>
                                <div className="bg-indigo-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-indigo-800">
                                        0
                                    </p>
                                    <p className="text-sm text-indigo-600">
                                        Cancelled Orders
                                    </p>
                                </div>

                                <div className="bg-pink-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-pink-800">
                                        0
                                    </p>
                                    <p className="text-sm text-pink-600">
                                        New Messages
                                    </p>
                                </div>
                                <div className="bg-gray-200 p-4 rounded shadow-sm">
                                    <p className="text-xl font-semibold text-gray-800">
                                        0
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        New Notifications
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
