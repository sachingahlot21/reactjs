import React from 'react'
import { PiVideoFill } from "react-icons/pi";
import { TfiVideoClapper } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { PiTelevisionBold } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-[6%] h-[92vh] bg-[rgb(31,37,53)] pt-8 items-center rounded-md flex flex-col gap-8'>
      <PiVideoFill className='text-4xl mb-6  text-red-800 ' />

      <NavLink  style={({ isActive }) => ({
        color: isActive ? 'white' : 'rgb(90,107,143)'
      })} to='/'><CgMenuGridR className={`transition ease-in-out delay-150 duration-100 text-2xl  hover:text-white  hover:scale-125`} /></NavLink>

      <NavLink  style={({ isActive }) => ({
        color: isActive ? 'white' : 'rgb(90,107,143)'
      })}  to='videos'><TfiVideoClapper className='transition ease-in-out delay-150 duration-100 text-xl ] hover:text-white  hover:scale-125' />
      </NavLink>
      <NavLink style={({ isActive }) => ({
        color: isActive ? 'white' : 'rgb(90,107,143)'
      })}  to='tv_shows'>
        <PiTelevisionBold className='transition ease-in-out delay-150 duration-100 text-2xl  hover:text-white  hover:scale-125' />
      </NavLink>
      <NavLink style={({ isActive }) => ({
        color: isActive ? 'white' : 'rgb(90,107,143)'
      })}  to='bookmarks'>
        <FaBookmark className='transition ease-in-out delay-150 duration-100 text-2xl  hover:text-white  hover:scale-125' />
      </NavLink>
    </div>

  )
}

export default Navbar