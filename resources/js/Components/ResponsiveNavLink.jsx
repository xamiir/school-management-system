import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? "border-indigo-400 text-white bg-blue-600 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                    : "border-transparent rounded-lg text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-300 focus:text-blue-600 focus:bg-blue-600 focus:border-gray-300"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
