import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 text-gray-900 focus:border-indigo-700 "
                    : "border-transparent text-blue-600 hover:white hover:border-blue-800 focus:text-white focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
