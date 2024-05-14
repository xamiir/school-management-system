import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
export default function Authenticated({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <nav
                className={`bg-white w-64 py-6 px-4 space-y-6 text-gray-700 shadow-2xl  ${
                    showSidebar ? "block" : "hidden"
                } sm:block`}
            >
                <div className="flex justify-center">
                    {/* Application Logo (if needed) */}
                </div>
                <div className="space-y-6 text-gray-700 ">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </NavLink>
                    <ResponsiveNavLink
                        method="post"
                        href={route("users.index")}
                        as="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                        Users
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("classes.index")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>
                        Classes
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("students.index")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                        </svg>
                        Students
                    </ResponsiveNavLink>
                </div>
            </nav>

            {/* Content */}
            <div className="flex flex-col flex-1">
                <header className="bg-white border-b border-gray-100 p-4 text-gray-700  ">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="block sm:hidden text-gray-500 focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        showSidebar
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                        <div>
                            <Dropdown
                                trigger={
                                    <button className="flex items-center space-x-2 text-sm focus:outline-none">
                                        <img
                                            src={user.profile_photo_url}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span>{user.name}</span>
                                    </button>
                                }
                            >
                                <NavLink
                                    href={route("profile.edit")}
                                    className="block px-4 py-2 text-sm text-gray-700"
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                >
                                    Log Out
                                </NavLink>
                            </Dropdown>
                        </div>
                        {header}
                    </div>
                </header>
                <main className="p-4 flex-1 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
