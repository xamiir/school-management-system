import React from "react";
import { Head, usePage, Link, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Students({ auth }) {
    const { students } = usePage().props;

    const destroy = (studentId) => {
        if (confirm("Are you sure you want to delete this student?")) {
            router.delete(route("students.destroy", studentId));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Students
                </h2>
            }
        >
            <Head title="Students" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("students.create")}
                                >
                                    Add Student
                                </Link>
                                <h3 className="text-lg font-semibold">
                                    Students List
                                </h3>
                            </div>
                            <div className="flex flex-col mt-5">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <table className="table-auto min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Email
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Phone
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Address
                                                    </th>

                                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {students.map((student) => (
                                                    <tr key={student.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {student.name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {student.email}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {student.phone}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {student.address}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <Link
                                                                href={route(
                                                                    "students.edit",
                                                                    student.id
                                                                )}
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                <svg
                                                                    class="h-6 w-6 text-blue-500 inline-block
                                                                    hover:text-blue-700
                                                                    "
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="2"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    {" "}
                                                                    <path
                                                                        stroke="none"
                                                                        d="M0 0h24v24H0z"
                                                                    />{" "}
                                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                                                                    <line
                                                                        x1="16"
                                                                        y1="5"
                                                                        x2="19"
                                                                        y2="8"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                            <button
                                                                onClick={() =>
                                                                    destroy(
                                                                        student.id
                                                                    )
                                                                }
                                                                className="ml-4 text-red-600 hover:text-red-900"
                                                            >
                                                                <svg
                                                                    class="h-6 w-6 text-red-500 inline-block
                                                                    hover:text-red-700
                                                                    "
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    {" "}
                                                                    <polyline points="3 6 5 6 21 6" />{" "}
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                                                                    <line
                                                                        x1="10"
                                                                        y1="11"
                                                                        x2="10"
                                                                        y2="17"
                                                                    />{" "}
                                                                    <line
                                                                        x1="14"
                                                                        y1="11"
                                                                        x2="14"
                                                                        y2="17"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {!students.length && (
                                                    <tr>
                                                        <td
                                                            colSpan="6"
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                                                        >
                                                            No students found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
