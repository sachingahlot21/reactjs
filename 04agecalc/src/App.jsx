import { useState } from 'react'
import './App.css'
import { FaCircleArrowDown } from "react-icons/fa6";

function App() {
  const [daysRes, setDaysRes] = useState('--')
  const [monthsRes, setMonthsRes] = useState('--')
  const [yearsRes, setYearsRes] = useState('--')

  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')

  function validateDayMonth() {

    if (months == 1) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 2) {
      if (days > 29 || days < 0) {
        return false
      }
      return true
    }

    if (months == 3) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 4) {
      if (days > 30 || days < 0) {
        return false
      }
      return true
    }

    if (months == 5) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 6) {
      if (days > 30 || days < 0) {
        return false
      }
      return true
    }

    if (months == 7) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 8) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 9) {
      if (days > 30 || days < 0) {
        return false
      }
      return true
    }

    if (months == 10) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    if (months == 11) {
      if (days > 30 || days < 0) {
        return false
      }
      return true
    }

    if (months == 12) {
      if (days > 31 || days < 0) {
        return false
      }
      return true
    }

    return true
  }

  function findResult() {
    var currentYear = 2024
    var currentMonth = 3
    var currentDate = 27
    var fullYear = currentYear - years
    var fullMonth;

    if (months > currentMonth) {
      fullYear = fullYear - 1;
      currentMonth = currentMonth + 12
      fullMonth = currentMonth - currentMonth
      setYearsRes(fullYear)
      setMonthsRes(fullMonth)
    }

    if (months <= currentMonth) {

      fullMonth = currentMonth - months
      setYearsRes(fullYear)
      setMonthsRes(fullMonth)

    }


    if (currentDate < days) {
      setMonthsRes(fullMonth - 1)
      currentDate = currentDate + 28
      setDaysRes(currentDate - days)
    }

    if (currentDate >= days) {
      setDaysRes(currentDate - days)
    }

    //  return true
  }

  const hadnleBtn = () => {
    var submitOK = "true"
    if (days > 31 || !days || days == 0) {
      alert("Invalid Day")
      submitOK = "false"
      console.log("1")
    }

    if (months > 12 || !months || months == 0) {
      alert("Invalid Month")
      submitOK = "false"
      console.log("2")
    }

    if (years > 2024 || !years || years == 0) {
      alert("Invalid Year")
      submitOK = "false"
      console.log("3")
    }

    if (validateDayMonth() == false) {
      submitOK = "false"
      alert("Invalid Day")
    }

    if (submitOK == "false") {
      return false
    }
    else {
      findResult()
      // setDays(0)
      // setMonths(0)
      // setYears(0)
      // console.log("res")
    }

  }


  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-[rgb(240,240,240)] flex justify-center items-center'>

        <div className='w-[50%] h-[70%] bg-white rounded-t-[30px] rounded-bl-[30px] rounded-br-[150px] relative'>

          <div className='text-[rgb(134,76,255)] absolute right-20 top-28'>
            <button onClick={hadnleBtn}><FaCircleArrowDown className='text-6xl' /></button>
          </div>

          <div className='w-[75%] h-[30%]  ml-9 mt-4 flex items-center justify-start gap-8 border-b-[1px]'>

            <div className='w-[30%] h-[60%]  flex flex-col'>
              <span className='text-[rgb(138,138,138)] font-semibold w-[10%] text-xs'>DAY</span>
              <input className='border-[1px] rounded w-[90%] h-[70%] font-extrabold mt-2 p-4 text-xl ' value={days} type='number' placeholder='DD' onChange={(e) => setDays(e.target.value)} />
            </div>

            <div className='w-[30%] h-[60%] flex flex-col'>
              <span className='text-[rgb(138,138,138)] font-semibold w-[10%] text-xs'>MONTH</span>
              <input className='border-[1px] rounded w-[90%] h-[70%]  font-extrabold  mt-2 p-4 text-xl ' type='number' value={months} placeholder='MM' onChange={(e) => setMonths(e.target.value)} />
            </div>

            <div className='w-[30%] h-[60%]  flex flex-col'>
              <span className='text-[rgb(138,138,138)] font-semibold w-[10%] text-xs font-sans '>YEAR</span>
              <input className='border-[1px] rounded w-[90%] h-[70%]  font-extrabold mt-2 p-4 text-xl' type='number' value={years} placeholder='YYYY' onChange={(e) => setYears(e.target.value)} />
            </div>
          </div>

          <div className='w-[75%] h-[65%]  flex items-center flex-col pt-2'>
            <div className='w-[85%] font-sans italic font-extrabold text-6xl h-[30%] '>
              <span className='text-[rgb(134,76,255)]'>{yearsRes}</span> years
            </div>
            <div className='w-[85%] font-sans italic font-extrabold text-6xl h-[30%] ' >
              <span className='text-[rgb(134,76,255)]'>{monthsRes}</span> months
            </div>
            <div className='w-[85%] font-sans italic font-extrabold text-6xl h-[30%] '>
              <span className='text-[rgb(134,76,255)]'>{daysRes}</span> days
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
