import React, { useEffect } from "react";
import { Head, useForm, Link, usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ classes }) {
    const { auth } = usePage().props;
    const { data, setData, errors, post, put } = useForm({
        name: classes.name,
        description: classes.description,
        code: classes.code,
    });

    useEffect(() => {
        setData("name", classes.name);
        setData("description", classes.description);
        setData("code", classes.code);
    }, [classes]);

    function handleSubmit(e) {
        e.preventDefault();
        put(route("classes.update", classes.id), {
            onSuccess: () => {
                // Redirect to classes list after successful update
                router.get(route("classes.index"));
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Edit ${classes.name}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Edit Class
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
                                            htmlFor="description"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.description}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="code"
                                            className="block mb-2 text-sm text-gray-600"
                                        >
                                            Code
                                        </label>
                                        <input
                                            type="text"
                                            name="code"
                                            id="code"
                                            value={data.code}
                                            onChange={(e) =>
                                                setData("code", e.target.value)
                                            }
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                        <span className="text-red-600">
                                            {errors.code}
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
                                        href={route("classes.index")}
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
