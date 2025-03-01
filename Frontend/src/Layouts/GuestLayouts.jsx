import { NavLink, Outlet } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../image/school-logo.png"
import { useState } from "react";


export const GuestLayouts = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="School Logo"
                                className="h-12 w-auto"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                                Rachid School
                            </span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                    }`
                                }
                            >
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                            </NavLink>
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    `font-medium transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                    }`
                                }
                            >
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                            </NavLink>
                            <NavLink
                                to="admissions"
                                className={({ isActive }) =>
                                    `font-medium transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                    }`
                                }
                            >
                                Admissions
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                            </NavLink>
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    `font-medium transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                    }`
                                }
                            >
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `font-medium transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                    }`
                                }
                            > Login
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                        </NavLink>
                        </nav>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        >
                            {menuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <nav
                      className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full transition-transform duration-300 ${
                        menuOpen ? "translate-x-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
                    }`}
                    >
                        <ul className="flex flex-col space-y-2 p-4">
                            {["home", "about", "admissions", "contact"].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item}`}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-2  rounded-md transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                            }`
                                        }
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-2  rounded-md transition-colors relative group ${isActive ? "text-amber-700 font-semibold" : "text-gray-600 hover:text-amber-700"
                                        }`
                                    }
                                >
                                    Portal Login
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}


            </header>

            {/* Main Content */}
            <main className="flex-grow min-h-screen container mx-auto bg-cover bg-center bg-no-repeat backdrop-blur-md ">
                <Outlet />
            </main>


            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 border-t border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-orange-300 font-semibold mb-4">About Us</h3>
                            <ul className="space-y-2">
                                <li><NavLink to="/about" className="hover:text-amber-500 transition-colors">Our History</NavLink></li>
                                <li><NavLink to="/staff" className="hover:text-amber-500 transition-colors">Faculty</NavLink></li>
                                <li><NavLink to="/academics" className="hover:text-amber-500 transition-colors">Academics</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-orange-300 font-semibold mb-4">Admissions</h3>
                            <ul className="space-y-2">
                                <li><NavLink to="/apply" className="hover:text-amber-500 transition-colors">Apply Now</NavLink></li>
                                <li><NavLink to="/tuition" className="hover:text-amber-500 transition-colors">Tuition & Fees</NavLink></li>
                                <li><NavLink to="/visit" className="hover:text-amber-500 transition-colors">Schedule a Visit</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-orange-300 font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><NavLink to="/calendar" className="hover:text-amber-500 transition-colors">Calendar</NavLink></li>
                                <li><NavLink to="/library" className="hover:text-amber-500 transition-colors">Library</NavLink></li>
                                <li><NavLink to="/portal" className="hover:text-amber-500 transition-colors">Student Portal</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-orange-300 font-semibold mb-4">Contact</h3>
                            <p className="mb-2">123 Education Street</p>
                            <p className="mb-2">City, Country</p>
                            <p className="mb-2">Tel: (123) 456-7890</p>
                            <p>Email: info@rachidschool.com</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p>&copy; {new Date().getFullYear()} Rachid School. All rights reserved.</p>
                        <div className="mt-2 flex justify-center space-x-4">
                            <NavLink to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</NavLink>
                            <NavLink to="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
