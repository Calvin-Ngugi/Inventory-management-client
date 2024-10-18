"use client"

import { useAppSelector } from '@/app/redux';
import { setIsSideBarCollapsed } from '@/state';
import { Menu } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();

    const isSideBarCollapsed = useAppSelector(
        (state) => state.global.isSideBarCollapsed 
     );

     const toggleSidebar = () => {
        dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
     };

     const sideBarClassNames = `fixed flex flex-col ${
        isSideBarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
     } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

    return (
        <div className={sideBarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideBarCollapsed ? 'px-5' : 'px-8'}`}>
                <div>Logo</div>
                <h1 className={`${isSideBarCollapsed ? 'hidden' : 'block'} font-extrabold text-2xl`}>EDSTOCK</h1>
                <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
                    <Menu className='w-4 h-4' size={24} />
                </button>
            </div>

            {/* LINKS */}
            <div className='flex-grow mt-8'>
                
            </div>

            {/* FOOTER */}
            <div>
                <p className='text-center text-xs text-gray-500'>&copy; 2024 Edstock</p>
            </div>
        </div>
    )
}

export default Sidebar