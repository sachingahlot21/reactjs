import React, { useEffect, useState } from 'react'

function PlanStep3({ head, p, dollar, ser }) {
    const [check, setCheck] = useState(ser)
    useEffect(()=>{
        setCheck(ser)
    },[ser])

    return (
        <div className='flex p-4 w-[100%] h-[100%] rounded-md border-[1px] bg-white hover:bg-[rgb(229,244,246)] border-[rgb(188,193,211)] hover:border-[rgb(25,54,95)]'>
            <label className='flex  items-center w-[10%] '>
                <input className='w-[60%] h-[60%]' type="checkbox"
                    onChange={(e) => setCheck(e.target.checked)}
                    checked={check}
                />
            </label>
            <div className='w-[73%] '>
                <h1 className='text-sm text-[rgb(25,54,95)] font-bold'>{head}</h1>
                <h1 className='text-xs font-semibold text-[rgb(188,193,211)]'>{p}</h1>
            </div>
            <span className=' w-[17%] m-auto  text-sm font-semibold text-[rgb(25,54,95)]'>+${dollar}/mo</span>
        </div>
    )
}

export default PlanStep3