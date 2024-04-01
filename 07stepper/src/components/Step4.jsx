import React from 'react'
import { useState } from 'react'

function Step4({ handleNext, handlePrev, activePage, checkSteps }) {

  const [validated, setValidated] = useState(false)

  const validateForm = () => {
    handleNext()
  }

  return (
    <div className='w-[100%] bg-white h-[100%] rounded-md '>
      <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
        <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Finishing up</h2>
        <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>
          Double-check everything looks OK before confirming. </h3>
      </div>

      <div className='w-[100%] h-[75%] flex flex-col   px-24 pt-12 pr-28' >
        <div className='w-[100%] h-[60%] bg-[rgb(229,244,246)] rounded-md p-4'>

          <div className='h-[50%] w-[100%] gap-0  hover:cursor-pointer border-b-[1px]'>
            <div className='flex justify-between h-[22%]'>
              <h1 className='text-sm font-bold text-[rgb(25,54,95)]'>Arcade(Monthly)</h1>
              <span className='text-sm font-bold text-[rgb(25,54,95)]'>$9/mo</span>
            </div>
            <span className='text-xs underline font-semibold mt-0 text-[rgb(25,54,95)]'>Change</span>
          </div>
          <div className=' h-[50%] '>
            <div className='  items-center flex h-[50%] justify-between'>
              <h1 className='text-xs font-semibold text-[rgb(188,193,211)]'>Online service</h1>
              <span className='text-xs font-semibold text-[rgb(25,54,95)]'>+$1/mo</span>
            </div>

            <div className=' items-center flex h-[50%] justify-between'>
              <h1 className='text-xs font-semibold text-[rgb(188,193,211)]'>Larger storage</h1>
              <span className='text-xs font-semibold text-[rgb(25,54,95)]]'>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className='p-4 pt-0 w-[100%] h-[20%] mt-6   flex justify-between'>

          <h1 className='text-xs font-semibold text-[rgb(188,193,211)]'>
            Total (per month)
          </h1>
          <span className='font-bold text-[rgb(25,54,95)]'>
            +$12/mo
          </span>

        </div>
      </div>

      {/* <div className='w-[100%] pl-[110px] h-[25%] pr-28  flex justify-between rounded-md'>
        <button className='mt-12 text-[rgb(25,54,95)] font-semibold'>Go Back</button>
        <button className='w-[120px] h-[50px] mt-16 bg-[rgb(25,54,95)] text-white rounded-md'>Confirm</button>
      </div> */}
      <div className={`w-[100%] h-[20%] pr-32 pl-28 flex rounded-md ${activePage === 1 ? 'justify-end' : 'justify-between'}`}>

        {
          activePage !== 1 ? <button className='mt-2 text-[rgb(25,54,95)] font-semibold' onClick={handlePrev}>Go Back</button> : ''
        }


        <button disabled={validated} className='w-[100px] h-[40px] mt-10 bg-[rgb(25,54,95)] text-white rounded-md' onClick={validateForm}>
          {
            activePage === checkSteps ? 'Confirm' : 'Next Step'
          }
        </button>
      </div>
    </div>
  )
}

export default Step4