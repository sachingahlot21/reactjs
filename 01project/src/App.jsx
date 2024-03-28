import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [active, setActive] = useState(true)
  const handleDiv = () => {
   setActive((prev)=> !prev)
  }

  return (
    <>
      <div className='container'>
        <div onClick={handleDiv} className='maindiv'>
        </div>
        <div className='toShow' style={active ? {display : 'block'} : {display : 'none'} }>
          <button onClick={handleDiv}>CLOSE</button>
        </div>
      </div>

    </>
  )
}

export default App
