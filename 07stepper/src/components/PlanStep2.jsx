import React from 'react'

function PlanStep2({ imageSrc, name, dollar , timePack }) {
    return (
        <div className={`p-4 w-[100%] h-[100%] rounded-md border-[1px] bg-white hover:bg-[rgb(229,244,246)] ${timePack ? 'bg-[rgb(229,244,246)]' : ''} border-[rgb(188,193,211)] hover:border-[rgb(25,54,95)]`}>
            <img className='w-[35%] h-[30%]' src={imageSrc} alt='no img' />
            <h1 className='mt-[43%] font-bold text-[rgb(25,54,95)]'>{name}</h1>
            <h2 className='text-xs mt-[1px] font-semibold text-[rgb(188,193,211)]'>${dollar}/mo</h2>
        </div>
    )
}

export default PlanStep2