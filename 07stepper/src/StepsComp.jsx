import React from 'react'

function StepsComp({ numb, head, findAct }) {
    return (
        <div className='md:w-[100%]   h-[100%] flex md:justify-center items-center '>

            <div className='md:w-[15%] w-[60%]   md:h-[50%] h-[90%]  '>
                <div className={`rounded-full border-white border w-[100%] h-[100%] flex justify-center items-center md:text-md text-2xl font-bold  ${findAct == numb ? 'bg-[rgb(229,244,246)] text-[rgb(25,54,95)]' : "text-white"}`}>{numb}</div>
            </div>
            <div className='pl-3 w-[75%] hidden md:block h-[60%] '>
                <h1 className='text-xs text-white'>STEP {numb}</h1>
                <h2 className='text-base font-bold text-white'>{head}</h2>
            </div>
        </div>
    )
}

export default StepsComp