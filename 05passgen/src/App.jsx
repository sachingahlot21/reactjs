import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(1)
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState('-')

  const [checkUc, setCheckUc] = useState(false)
  const [checkLc, setCheckLc] = useState(false)
  const [checkNum, setCheckNum] = useState(false)
  const [checkSymb, setCheckSumb] = useState(false)

  function handleCheckUc() {
    setCheckUc(!checkUc)
  }
  function handleCheckLc() {
    setCheckLc(!checkLc)
  }
  function handleCheckNum() {
    setCheckNum(!checkNum)
  }
  function handleCheckSymb() {
    setCheckSumb(!checkSymb)
  }

  const generatePass = () => {
    let pass = ""
    let str = ""
    if (checkUc) str += "ABCDEFGHIJKLMNOPQRSTUVWXYX"

    if (checkLc) str += "abcdefghijklmnopqrstuvwxyz"

    if (checkNum) str += "0123456789"

    if (checkSymb) str += "!@#$%^&*(){}?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    if (!checkNum && !checkSymb) setStrength("WEAK")
    if (checkNum && length > 7) setStrength("MEDIUM")
    if (checkNum && checkSymb && length > 7) setStrength("STRONG")
  }

  function handleCopyBtn() {
    navigator.clipboard.writeText(password)
    alert('copied!')
  }
  function handleGenBtn() {
    generatePass()
  }
  return (
    <>
      <div className='mainContainer'>
        <div className='passDiv'>
          <input type='text' readOnly value={password} placeholder='PASSWORD' />
          <button onClick={handleCopyBtn}>copy</button>
        </div>

        <div className='mainDiv'>
          <div className='clDiv'>
            <h1>Character length</h1>
            <span>{length}</span>
          </div>
          <input className='rangeInput' value={length} onChange={(e) => setLength(e.target.value)} type='range' min='1' max='20' ></input>
          <div className='labelDiv'>
            <label className='labels'>
              <input type='checkbox' checked={checkUc} onChange={handleCheckUc}></input>
              <p>Include Uppercase Letters</p>
            </label>
            <label className='labels'>
              <input type='checkbox' checked={checkLc} onChange={handleCheckLc}></input>
              <p>Include Lowercase Letters</p>
            </label>
            <label className='labels'>
              <input type='checkbox' checked={checkNum} onChange={handleCheckNum}></input>
              <p>Include Numbers</p>
            </label>
            <label className='labels'>
              <input type='checkbox' checked={checkSymb} onChange={handleCheckSymb}></input>
              <p>Include Symbols</p>
            </label>
          </div>
          <div className='strengthDiv'>
            <h1>STRENGTH</h1>
            <span>{strength}</span>
          </div>
          <button className='genBtn' onClick={handleGenBtn}>GENERATE</button>
        </div>

      </div>
    </>
  )
}

export default App
