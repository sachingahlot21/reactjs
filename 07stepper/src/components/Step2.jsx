import React from 'react'
import PlanStep2 from './PlanStep2'
import AdvImg from '../assets/images/icon-advanced.jpg'
import ArcImg from '../assets/images/icon-arcade.jpg'
import ProImg from '../assets/images/icon-pro.jpg'
import '../App.css'



function Step2() {
    return (
        <div className='w-[100%] bg-white h-[100%] rounded-md '>
            <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
                <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Select your plan</h2>
                <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>You have the option of monthly or yearly billing. </h3>
            </div>

            <div className='w-[100%] h-[50%] flex flex-col   px-24 py-2 pr-28' >
                <div className='w-[100%] h-[55%] flex justify-between '>
                    <div className='w-[30%] h-[100%] '>
                        <PlanStep2 imageSrc={ArcImg} name='Arcade' dollar='9' />
                    </div>
                    <div className='w-[30%] h-[100%] '>
                        <PlanStep2 imageSrc={AdvImg} name='Advanced' dollar='12' /></div>
                    <div className='w-[30%] h-[100%] '>
                        <PlanStep2 imageSrc={ProImg} name='Pro' dollar='15' />
                    </div>
                </div>
                <div className=' flex items-center h-[45%] w-[100%]'>
                    <div className='flex items-center gap-2 justify-center w-[100%] bg-[rgb(229,244,246)] h-[40%] rounded-md'>
                        <h1 className='text-sm font-semibold text-[rgb(25,54,95)]'>Monthly</h1>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        <h1 className='text-sm font-semibold text-[rgb(188,193,211)]'>Yearly</h1>

                    </div>
                </div>
            </div>

            <div className='w-[100%] pl-[110px] h-[25%] pr-28  flex justify-between rounded-md'>
                <button className='mt-12 text-[rgb(25,54,95)] font-semibold'>Go Back</button>
                <button className='w-[120px] h-[50px] mt-16 bg-[rgb(25,54,95)] text-white rounded-md'>Next Step</button>
            </div>

        </div>
    )
}

export default Step2