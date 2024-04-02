import React from 'react'
import { CiBookmark } from "react-icons/ci";

function TrendDiv() {
    return (
        <>
            <div className='bg-cover w-[35%] relative h-[100%] bg-black rounded-md mr-2' style={{
                backgroundImage: `url(https://media.npr.org/assets/img/2014/11/13/fl-17895r_wide-d745edc663a75ddc961f66684631a621dc148566-s1200-c85.webp)`,
            }}>
                <div className='top-3 right-3 absolute w-[30px] h-[30px] bg-gray-400 rounded-full flex justify-center items-center text-white text-base'><button><CiBookmark /></button></div>

                <div className='w-[100%] h-[30%] bottom-2 absolute left-4 '>
                    <span className='text-sm mr-2 text-gray-200'>2019</span>
                    <span className='text-sm mr-2 text-gray-200'>Movie</span>
                    <span className='text-sm mr-2 text-gray-200'>PG</span>
                    <h1 className='text-xl font-bold text-white'>Beyond Earth</h1>
                </div>
            </div>

        </>
    )
}

export default TrendDiv