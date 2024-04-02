import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import MainMenu from './MainMenu'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className='w-[100vw] h-auto bg-[rgb(16,20,31)] p-4 flex'>
            <Navbar />
            <div className='w-[92%]  pl-6 h-auto flex flex-col'>
                <Searchbar />
                <div className='w-[100%] h-[90%] '>
                    <Outlet />
                </div>
            </div>

        </div>
        {/* <Navbar />
        <Searchbar />
        <Outlet /> */}
        </>
    )
}

export default Home