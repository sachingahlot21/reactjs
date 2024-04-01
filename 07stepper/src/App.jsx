import { useState } from 'react'
import Step1 from '../src/components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import StepsComp from './StepsComp'

import bgIg from './assets/images/bgSidebar.jpg'
import bgMob from'./assets/images/bg-sidebar-mobile.jpg'
import './App.css'
import { DataProvider } from './context/DataContext'





function App() {

  const CHECKOUT_STEPS = [
    {
      name: 'Your_Info',
      Component: () => <Step1 handleNext={handleNext} handlePrev={handlePrev} checkSteps={stepLen} activePage={active} data={setMainData} />
    },
    {
      name: 'Select_Plan',
      Component: () => <Step2 handleNext={handleNext} handlePrev={handlePrev} checkSteps={stepLen} activePage={active} />
    },
    {
      name: 'Add_Ons',
      Component: () => <Step3 handleNext={handleNext} handlePrev={handlePrev} checkSteps={stepLen} activePage={active} />
    },
    {
      name: 'Summary',
      Component: () => <Step4 handleNext={handleNext} handlePrev={handlePrev} checkSteps={stepLen} activePage={active} />
    },
  ]


  const [active, setActive] = useState(1)
  const [mainData, setMainData] = useState([])

  const ActiveComponent = CHECKOUT_STEPS[active - 1].Component
  const stepLen = CHECKOUT_STEPS.length

  const handleNext = () => {
    setActive((active) => {
      if (active === CHECKOUT_STEPS.length) {
        console.log(mainData)
        return active;
      }
      else {
        return active + 1
      }
    }
    )
  }

  const addData = (data) => {
    setMainData((prev) => [...prev, { id: Date.now(), ...data }])
  }


  const handlePrev = () => {
    setActive((active) => {
      if (active === 1) {
        return active
      }
      else {
        return active - 1
      }
    })
  }

  return (
    <DataProvider value={{ mainData, addData }}>
      <div className='w-[100vw] h-[100vh]  bg-[rgb(229,244,246)] flex justify-center items-center'>
        <div className='md:w-[70%] w-[100%] h-[100%] md:h-[95%] bg-white rounded-xl md:flex block'>

          <div className='  md:w-[30%] w-[100%] h-[20%] md:h-[100%]  flex justify-center items-center bg-cover bg-center'

          >
            <div className='bg-cover flex justify-center items-center md:items-start bg-center md:w-[90%] w-[100%] h-[95%]  rounded-xl'
              style={{
                backgroundImage: `url(${bgIg})`,
              }}>

              <div className='p-2 md:w-[100%] w-[60%]  h-[50%]  flex md:block  mt-4 '>

                <div className='md:w-[100%] w-[25%] h-[100%] md:h-[25%] '>
                  <StepsComp findAct={active} numb='1' head='YOUR INFO' />
                </div>
                <div className='md:w-[100%] md:h-[25%] w-[25%] h-[100%] '>
                  <StepsComp findAct={active} numb='2' head='SELECT PLAN' />
                </div>
                <div className='md:w-[100%] md:h-[25%] w-[25%] h-[100%]'>
                  <StepsComp findAct={active} numb='3' head='ADD-ONS' />
                </div>
                <div className='md:w-[100%] md:h-[25%] w-[25%] h-[100%]'>
                  <StepsComp findAct={active} numb='4' head='SUMMARY' />
                </div>
              </div>
            </div>
          </div>

          <div className='md:w-[70%] w-[100%] h-[70%] md:h-[100%]  '>

            <div className='md:w-[100%] h-[100%] w-[100%] md:h-[80%] '>
              <ActiveComponent />
            </div>

            {/* <div className={`w-[100%] h-[20%] pr-32 pl-28 flex rounded-md ${active === 1 ? 'justify-end' : 'justify-between'}`}>

              {
                active !== 1 ? <button className='mt-2 text-[rgb(25,54,95)] font-semibold' onClick={handlePrev}>Go Back</button> : ''
              }


              <button className='w-[100px] h-[40px] mt-10 bg-[rgb(25,54,95)] text-white rounded-md' onClick={handleNext}>
                {
                  active === CHECKOUT_STEPS.length ? 'Confirm' : 'Next Step'
                }
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </DataProvider>
  )
}

export default App
