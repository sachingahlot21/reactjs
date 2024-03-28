import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let btnArray = [5, 10, 15, 25, 50, 'Custom']

  const [bill, setBill] = useState(0)
  const [peopleNo, setPeopleNo] = useState(0)
  const [tipPerc, setTipPerc] = useState(0)
  const [tipDist, setTipDis] = useState(0) //tip discount
  const [totalDist, setTotalDist] = useState(0) //total discount
  const [grandTotal, setgrandTotal] = useState(0)
  const [handleBtn, setHandleBtn] = useState(true)
  const [active, setActive] = useState(false)

  const handleFind = () => {
    let subTotal = (bill / 100) * tipPerc
    let tipPerP = subTotal / peopleNo
    setTipDis(Math.floor(tipPerP))
    console.log(Math.floor(tipPerP))
    setgrandTotal(subTotal + Number(bill))
    var gt = subTotal + Number(bill)
    var tt = gt / peopleNo
    setTotalDist(Math.floor(tt))
    setHandleBtn(false)
  }

  const handlePercBtn = (btnV) => {
    btnV != 'Custom' ? setTipPerc(btnV) : setTipPerc(2)
    setActive(btnV)
  }

  const handleReset = () => {
    setBill(0)
    setPeopleNo(0)
    setTipPerc(0)
    setTipDis(0)
    setgrandTotal(0)
    setTotalDist(0)
    setHandleBtn(true)
    setActive(false)
    // alert(bill)
  }

  return (
    <>
      <div className='mainContainer'>
        <div className='contentDiv'>
          <div className='leftContent'>
            <div className='leftContent1'>
              <span>
                BILL
              </span>
              <br></br>
              <input type='number' placeholder='   Rs.' value={bill} onChange={(e) => setBill(e.target.value)}></input>
            </div>
            <div className='leftContent2'>
              <span>Select Tip %</span>
              <div className='tipPercDiv'>
                {
                  btnArray.map((btnV, index) => (
                    <button key={index} onClick={() => handlePercBtn(btnV)} 
                    className={`${active === btnV ? "tipPercBtnBtnAct" : "tipPercBtn "}`}>

                      {btnV != 'Custom' ? `${btnV}%` : btnV
                      }

                    </button>

                  ))
                }
              </div>
            </div>
            <div className='leftContent3'>
              <span>
                Number of People
              </span>
              <br></br>
              <input type='number' placeholder=' No.' value={peopleNo} onChange={(e) => setPeopleNo(e.target.value)}></input>
            </div>

          </div>
          <div className='rightContent'>
            <div className='rightContent1'>
              <div className='rightSubDiv1'>
                <h1>Tip Amount<span><br></br>/per person</span></h1>
              </div>
              <div className='rightSubDiv2'>
                Rs.{tipDist}
              </div>
            </div>
            <div className='rightContent1'>
              <div className='rightSubDiv1'>
                <h1>Total Amount<span><br></br>/per person</span></h1>
              </div>
              <div className='rightSubDiv2'>
                Rs.{totalDist}
              </div>
            </div>
            {
              handleBtn ? <button onClick={handleFind} className='resetBtn'>FIND</button> : <button onClick={handleReset} className='resetBtn'>RESET</button>

            }


          </div>
        </div>
      </div>
    </>
  )
}

export default App
