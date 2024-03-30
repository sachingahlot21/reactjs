import React from 'react'

function Step1() {
  return (
    <div className='w-[100%] bg-white h-[100%] rounded-md '>
      <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
        <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Personal info</h2>
        <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>Please provide your name, email address, and phone number.</h3>
      </div>
      <div className='w-[100%] h-[50%] bg-white flex flex-col   px-24 py-2 pr-32' >
        <span className='mb-1 font-semibold text-[rgb(25,54,95)]'>
          Name
        </span>
        <input type='text' className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' placeholder='e.g.Stephen King'></input>

        <span className='mb-1  font-semibold text-[rgb(25,54,95)]'>
          Email Address
        </span>
        <input className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' type='text' placeholder='e.g.stephenking@lorem.com'></input>

        <span className='mb-1 font-semibold text-[rgb(25,54,95)]'>
          Phone Number
        </span>
        <input className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' type='text' placeholder='e.g. +1 234 567 890' ></input>
      </div>
      <div className='w-[100%] h-[25%] pr-32 flex justify-end rounded-md'>
      <button className='w-[120px] h-[50px] mt-16 bg-[rgb(25,54,95)] text-white rounded-md'>Next Step</button>
      </div>
     
    </div>
  )
}

export default Step1