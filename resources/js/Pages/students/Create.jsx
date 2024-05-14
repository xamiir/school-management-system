import React from "react";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateStudent() {
    const { auth } = usePage().props;
    const { students } = usePage().props;
    
    const { data, setData, errors, post } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("students.store"), {
            onSuccess: () => {
                // Redirect to students list after successful submission
                route("students.index");
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Register Student" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("students.index")}
                                >
                                    Back
                                </Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.email}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.phone}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="address"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
