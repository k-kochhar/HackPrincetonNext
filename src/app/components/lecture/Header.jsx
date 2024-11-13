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

                    <div className="flex items-center justify-end">
                        <img
                            loading="lazy"
                            src="/ProfilePicture.png"
                            alt="Profile Picture"
                            className="object-contain shrink-0 rounded-none aspect-[1.07] w-[65px]"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
