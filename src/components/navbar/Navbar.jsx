import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ syncWithGoogle,setSyncWithGoogle}) {
    const navigate = useNavigate();
    const handleLogout = async()=>{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, { credentials: "include", });
        localStorage.removeItem('user');
        navigate('/login');
    }
    const handleSignIn = () => {
        window.open(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${import.meta.env.VITE_GOOGLE_CLIENT}&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events&access_type=offline`, "_self");
    }
    const handleSignout=()=>{
        localStorage.removeItem("googleSync");
        setSyncWithGoogle(false);
    }
    return (
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>

                            <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex shrink-0 items-center">
                            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <Link to="/calendar" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative ml-3">
                            <div>
                                <button type="button" class="flex rounded-full bg-orange-600 text-sm focus:outline-none px-3 py-2 text-white" onClick={syncWithGoogle?handleSignout:handleSignIn}>
                                    {syncWithGoogle?"Stop google Sync":"Sync with google"}
                                </button>
                            </div>
                        </div>

                        <div class="relative ml-3">
                            <div>
                                <button type="button" class="flex rounded-full bg-orange-600 text-sm focus:outline-none px-3 py-2 text-white" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
