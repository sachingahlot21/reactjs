import React from 'react'
import { TfiVideoClapper } from "react-icons/tfi";
import { CiBookmark } from "react-icons/ci";

function RecommendDiv() {
    return (
        <div className='w-[18%] h-[100%]  '>
            <div className='bg-cover w-[100%] h-[70%] relative rounded-md bg-black' style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/607368d2a3255736f73acb64/1618192023895-257JLDAE9D6UFD3ZU7I7/IMG_2471.jpg')` }}>

                <div className='top-3 right-3 absolute w-[20px] h-[20px] bg-gray-400 rounded-full flex justify-center items-center text-white text-sm'><button><CiBookmark /></button></div>

            </div>
            <div className='w-[100%] h-[30%] '>

                <span className='text-xs mr-2 text-gray-200'>2019</span>
                <span className='text-xs mr-2 text-gray-200'>Movie</span>
                <span className='text-xs mr-2 text-gray-200'>PG</span>

                <h1 className='text-sm font-bold text-white'>The Greats Lands</h1>
            </div>
        </div>
    )
}

export default RecommendDiv