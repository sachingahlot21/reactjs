import { useState } from 'react'
import Cmntbox from './components/Cmntbox'
import CmntText from './components/CmntText'
import './App.css'
import { cmnt, myDetails, pPic } from './utils/Constants'
import { CmntProvider } from './context/CmntContext'

function App() {
  const [cmnts, setCmnts] = useState([
    { id: '1', time: "1 month ago", name: 'amyrobson', likes: '12', cmnt: `${cmnt.cmnt1}`, profile: `${pPic.pic1}` },
    { id: '2', time: "2 weeks ago", name: 'maxblagun', likes: '5', cmnt: `${cmnt.cmnt2}`, profile: `${pPic.pic2}` }
  ])

  const [myCmnt, setMyCmnt] = useState('')

  const addCmnt = () => {
    setCmnts((prev) => [...prev, { id: Date.now(), time: 'just now', name: 'juliusomo', likes: '0', profile: `${myDetails.profilePic}`, cmnt: `${myCmnt}` }])
    setMyCmnt('')
  }

  const deleteCmnt = (id) => {
    setCmnts((prev) => prev.filter((cmnt) => cmnt.id !== id))
  }

  const editCmnt = (id, cmnt) => {
    setCmnts((prev) => prev.map((prevCmnt) => (
      prevCmnt.id === id ? prevCmnt=cmnt : prevCmnt
    )))
  }

  const replyCmnt = () => {

  }

  return (
    <CmntProvider value={{ cmnts, addCmnt, replyCmnt, editCmnt, deleteCmnt }}>
      <div className='w-[100vw] h-auto pb-[100px] bg-[rgb(245,246,250)]'>

        <div className='w-[55%] h-auto m-auto  bg-[rgb(245,246,250)] pt-9'>
          {
            cmnts.map((person) => (
              <Cmntbox key={person.id} id={person.id} name={person.name} time={person.time} cmnt={person.cmnt} likes={person.likes} imgsrc={person.profile} />
            ))
          }

        </div>

        <div className='w-[55%] h-auto m-auto  bg-[rgb(245,246,250)] pt-9'>
          <div className='rounded-md w-[90%] h-[24vh] bg-white mb-4 m-auto flex gap-4 p-4'>
            <img className='object-cover w-8 h-8 rounded-full' src={myDetails.profilePic} />
            <input className='w-[75%] border border-gray-200 rounded-md p-0' type='text' placeholder='Add a comment...' value={myCmnt} onChange={(e) => setMyCmnt(e.target.value)}></input>
            <button className='bg-[rgb(124,75,210)] w-[20%] h-[40%] rounded-md text-white' onClick={addCmnt}>SEND</button>
          </div>
        </div>

      </div>
    </CmntProvider>
  )
}

export default App
