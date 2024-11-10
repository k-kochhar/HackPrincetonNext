import React from 'react';
import Logo from './Logo';

export default function Navbar() {
    return (
        <nav className="bg-white">
            <div className="w-screen px-14 pt-4">
                <div className="flex justify-between h-16">

                    <div className="flex gap-x-5">
                        <div className="flex items-center">
                            {/* Logo placeholder */}
                            <Logo/>
                            <span className="ml-2 text-xl font-extrabold text-gray-800">PigeonPost</span>
                        </div>
                        <div className=" sm:ml-6 sm:flex sm:space-x-8">
                            {/* Navigation links */}
                            <a href="/"
                               className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium">
                                Home
                            </a>
                            <a href="/dashboard"
                               className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium">
                                Dashboard
                            </a>
                            <a href="/lecture"
                               className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium">
                                Lecture
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center border justify-end">
                        <a href="/login"
                           className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Log In
                        </a>
                        <a href="/signup"
                           className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
