import React, { useState } from 'react'
import { useData } from '../context/DataContext'

function Step1({ handleNext, handlePrev, activePage, checkSteps }) {

  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)

  const { addData } = useData()

  const validateForm = () => {

    


    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      console.log("valid mail : checked!")
      return re.test(email);
    }

    function validatePh(phone) {
      var ph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return ph.test(phone)
    }

    var submitOk = "true"

    if (name.length < 1) {
      submitOk = "false"
    }

    if (validateEmail(email) == false) {
      submitOk = "false"
    }
    if (validatePh(phone) == false) {
      submitOk = "false"
    }

    if (submitOk == 'false') {
      console.log("step1 pending...")
      return false
    }

    else {
      addData({
        Name: name,
        EMAIL: email,
        PHONE: phone
      })
      handleNext()
    }

  }
  return (

    <div className='w-[100%]  h-[100%] rounded-md '>
      <div className='w-[100%] h-[25%] bg-white pl-24 py-12 rounded-md'>
        <h2 className='font-extrabold text-3xl text-[rgb(25,54,95)]'>Personal info</h2>
        <h3 className='text-sm mt-2 font-semibold text-[rgb(188,193,211)]'>Please provide your name, email address, and phone number.</h3>
      </div>

      <div className='w-[100%] h-[75%] bg-white flex flex-col   px-24 pt-12 pr-32' >
        <span className='mb-1 font-semibold text-[rgb(25,54,95)]'>
          Name
        </span>

        <input type='text' className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' placeholder='e.g.Stephen King'
          onChange={(e) => setName(e.target.value)}
        ></input>

        <span className='mb-1  font-semibold text-[rgb(25,54,95)]'>
          Email Address
        </span>

        <input className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' type='email' placeholder='e.g.stephenking@lorem.com' required
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <span className='mb-1 font-semibold text-[rgb(25,54,95)]'>
          Phone Number
        </span>

        <input className='text-sm pl-3 h-[18%] mb-4 border-[1px] border-[rgb(188,193,211)] rounded-md' type='text' placeholder='e.g. +1 234 567 890'
          onChange={(e) => setPhone(e.target.value)}></input>

      </div>

      {/* <div className='w-[100%] h-[25%] pr-32 flex justify-end rounded-md'>
      <button className='w-[120px] h-[50px] mt-16 bg-[rgb(25,54,95)] text-white rounded-md'>Next Step</button>
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

export default Step1