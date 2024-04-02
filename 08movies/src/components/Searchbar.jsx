import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Searchbar() {
  return (
    <div className='w-[80%] h-[10%] mt-5  mb-4   flex gap-3 items-center'>
      <IoSearchOutline className='text-white text-2xl ' />
      <input className='bg-[rgb(16,20,31)] w-[30%] text-lg' type='search' placeholder='Search for movies or TV series'></input>
    </div>
  )
}

export default Searchbar