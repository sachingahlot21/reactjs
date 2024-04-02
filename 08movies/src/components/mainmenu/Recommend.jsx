import React from 'react'
import RecommendDiv from './RecommendDiv'

function Recommend() {
  return (
    <div className='w-[100%] h-[50%] pt-4 mt-4'>
      <h1 className='text-2xl text-white w-[100%] h-[15%]'>Recommended for you</h1>
      <div className='w-[100%] h-[85%]  pt-4 flex '>
                <RecommendDiv />
            </div>
    </div>
  )
}

export default Recommend