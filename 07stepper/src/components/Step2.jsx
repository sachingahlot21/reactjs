import React, { useEffect } from 'react'
import { useState } from 'react'
import PlanStep2 from './PlanStep2'
import AdvImg from '../assets/images/icon-advanced.jpg'
import ArcImg from '../assets/images/icon-arcade.jpg'
import ProImg from '../assets/images/icon-pro.jpg'
import '../App.css'
import { useData } from '../context/DataContext'



function Step2({ handleNext, handlePrev, activePage, checkSteps, data }) {
    const [validated, setValidated] = useState(false)
    const [timePack, setTimePack] = useState('Arcade')
    const [switchh, setSwitchh] = useState(false)
    const [time, setTime] = useState('')
    const { addData } = useData()



    const handleArcade = () => {
        setTimePack('Arcade')
    }
    const handleAdvanced = () => {
        setTimePack('Advanced')
    }
    const handlePro = () => {
        setTimePack('Pro')
    }
    const validateForm = () => {
        handleNext()

        addData({
            TIMEPACK: timePack,
            TIME: time
        })
    }

    useEffect(() => {
        if (switchh) {
            setTime("yearly")

        }
        else {
            setTime("monthly")
        }
    }, [switchh])

    return (
        <div className='w-[100%] bg-white h-[100%] rounded-md '>
            <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
                <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Select your plan</h2>
                <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>You have the option of monthly or yearly billing. </h3>
            </div>

            <div className='w-[100%] h-[75%] flex flex-col   px-24 pt-12 pr-28' >
                <div className='w-[100%] h-[55%] flex justify-between '>
                    <div className='w-[30%] h-[100%] ' onClick={handleArcade}>
                        <PlanStep2 imageSrc={ArcImg} time={timePack} name='Arcade' dollar='9' />
                    </div>
                    <div className='w-[30%] h-[100%] ' onClick={handleAdvanced}>
                        <PlanStep2 imageSrc={AdvImg} time={timePack} name='Advanced' dollar='12' /></div>
                    <div className='w-[30%] h-[100%] ' onClick={handlePro}>
                        <PlanStep2 imageSrc={ProImg} time={timePack} name='Pro' dollar='15' />
                    </div>
                </div>
                <div className=' flex items-center h-[45%] w-[100%]'>
                    <div className='flex items-center gap-2 justify-center w-[100%] bg-[rgb(229,244,246)] h-[40%] rounded-md'>
                        <h1 className='text-sm font-semibold text-[rgb(25,54,95)]'>Monthly</h1>
                        <label class="switch">
                            <input onChange={(e) => setSwitchh(e.target.checked)} type="checkbox"
                                checked={switchh}
                            />
                            <span class="slider round"></span>
                        </label>
                        <h1 className='text-sm font-semibold text-[rgb(188,193,211)]'>Yearly</h1>

                    </div>
                </div>
            </div>



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

            {/* <div className='w-[100%] pl-[110px] h-[25%] pr-28  flex justify-between rounded-md'>
                <button className='mt-12 text-[rgb(25,54,95)] font-semibold'>Go Back</button>
                <button className='w-[120px] h-[50px] mt-16 bg-[rgb(25,54,95)] text-white rounded-md'>Next Step</button>
            </div> */}

        </div>
    )
}

export default Step2