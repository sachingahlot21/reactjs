import { useState } from 'react'
import Step1 from '../src/components/Step1'
import Step2 from './components/Step2'
import bgIg from './assets/images/bgSidebar.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[100vw] h-[100vh]  bg-[rgb(229,244,246)] flex justify-center items-center'>
        <div className='w-[70%] h-[95%] bg-white rounded-xl flex'>

          <div className='w-[30%] h-[100%]  flex justify-center items-center bg-cover bg-center'

          >
            <div className='bg-cover bg-center w-[90%] h-[95%] bg-green-400 rounded-xl'
              style={{
                backgroundImage: `url(${bgIg})`,
              }}>

            </div>
          </div>

          <div className='w-[70%] h-[100%] '>
            {/* <Step1 /> */}
            <Step2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
