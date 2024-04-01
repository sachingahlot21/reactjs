import React from 'react'
import PlanStep3 from './PlanStep3'
import { useState } from 'react'
import { useData } from '../context/DataContext'

function Step3({ handleNext, handlePrev, activePage, checkSteps }) {
   
    const { addData } = useData()
    const [validated, setValidated] = useState(false)
    const [service, setService] = useState(false)
    const [storage, setStorage] = useState(false)
    const [profile, setProfile] = useState(false)

    const [addons, setAddons] = useState([])

    const handleService = (value) => {

        setService(!service)

        if (addons.includes(value)) {
            setAddons(addons.filter(item => item !== value));
        } else {
            setAddons([...addons, value]);
        }

    }

    const handleProfilee = (value) => {
        setProfile(!profile)

        if (addons.includes(value)) {
            setAddons(addons.filter(item => item !== value));
        } else {
            setAddons([...addons, value]);
        }
    }

    const handleStorage = (value) => {
        setStorage(!storage)
        if (addons.includes(value)) {
            setAddons(addons.filter(item => item !== value));
        } else {
            setAddons([...addons, value]);
        }
    }


    const validateForm = () => {
        handleNext()

        addData({
            ADDONS: addons,   
        })
    }

    return (
        <div className='w-[100%] bg-white h-[100%] rounded-md '>
            <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
                <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Pick add-ons</h2>
                <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>
                    Add-ons help enhance your gaming experience. </h3>
            </div>

            <div className='w-[100%] h-[70%] bg-white flex flex-col   px-24 pt-12 pr-32' >

                <div className='w-[100%] h-[100%] flex flex-col justify-between '>
                    <div className='  w-[100%] h-[30%]' onClick={() => handleService("OnlineService")}>
                        <PlanStep3 head='Online service' p='Acces to multiplayer games' dollar='1' ser={service} />
                    </div>
                    <div className=' w-[100%] h-[30%]' onClick={() => handleStorage("LargerStorage")}>
                        <PlanStep3 head='Larger storage' p='Extra 1TB of cloud save' dollar='2' ser={storage} />
                    </div>
                    <div className=' w-[100%] h-[30%]' onClick={() => handleProfilee("Customizable_Profile")}>
                        <PlanStep3 head='Customizable Profile' p='Custom theme on your peofile' dollar='2' ser={profile} />
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

export default Step3

