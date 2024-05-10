import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, router } from "@inertiajs/react";

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

export default function index({ auth }) {
    const { products } = usePage().props;
    function destroy(e) {
        if (confirm("Are you sure you want to delete this product?")) {
            router.delete(route("product.destroy", e.currentTarget.id));
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
            sidebar={<Sidebar user={auth.user} />}
        >
            <Head title="Products" />
            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("products.create")}
                                >
                                    Create Product
                                </Link>
                                <h3 className="text-lg font-semibold">
                                    Products
                                </h3>
                            </div>
                            <div className="flex flex-col mt-5">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="table-auto min-w-full divide-y divide-gray-200 ">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Description
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            quantity
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Price
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Total Price
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Edit
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Delete
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 ">
                                                    {products.map((product) => (
                                                        <tr key={product.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {product.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    product.description
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                                                {
                                                                    product.quantity
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                                                {product.price}
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                                                {product.price *
                                                                    product.quantity}
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap ">
                                                                <Link
                                                                    href={route(
                                                                        "products.edit",
                                                                        product.id
                                                                    )}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                                                <button
                                                                    id={
                                                                        product.id
                                                                    }
                                                                    onClick={
                                                                        destroy
                                                                    }
                                                                    className="text-red-600 hover:text-red-900"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {!products.length && (
                                                        <tr>
                                                            <td
                                                                className="px-4 py-2 border-t"
                                                                colSpan="6"
                                                            >
                                                                No products
                                                                found.
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
            </div>
        </AuthenticatedLayout>
    );
}
