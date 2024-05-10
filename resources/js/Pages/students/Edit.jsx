import React, { useEffect } from "react";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditStudent({ student }) {
    const { auth } = usePage().props;
    const { data, setData, errors, post, put } = useForm({
        name: student.name,
        email: student.email,
        phone: student.phone,
        address: student.address,
    });

    useEffect(() => {
        setData("name", student.name);
        setData("email", student.email);
        setData("phone", student.phone);
        setData("address", student.address);
    }, [student]);

    function handleSubmit(e) {
        e.preventDefault();
        put(route("students.update", student.id), {
            onSuccess: () => {
                // Redirect to students list after successful update
                route("students.index");
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Edit ${student.name}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Edit Student
                            </h2>
                            <form name="editForm" onSubmit={handleSubmit}>
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
                                    <Link
                                        href={route("students.index")}
                                        className="ml-4 text-blue-500 self-center"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
