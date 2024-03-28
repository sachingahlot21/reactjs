import { useEffect, useState } from 'react'
// import data from '../data.json'
import './App.css'

function App() {

  const [details, setDetails] = useState([]) //user details from json
  const [page, setPage] = useState(0) //page count to handle slice functionality

  const [userPerPage, setUserPerPage] = useState(10) //user per page

  const [count, setCount] = useState(0)  //number of pages to form
  const [currentPage, setCurrentPage] = useState(1) //current page to display
  const [from, setFrom] = useState(0) //from 
  const [to, setTo] = useState(0)  //to
  const [userCount, setUserCount] = useState(34)
  const [hide, setHide] = useState(false)

  const [dropdown, setDropdown] = useState(false)

  const [checkUId, setCheckUId] = useState(true)
  const [checkName, setCheckName] = useState(true)
  const [checkAdd, setCheckAdd] = useState(true)
  const [checkMob, setCheckMob] = useState(true)

  const dataFetch = async () => {
    const url = await fetch("../data.json")
    const data = await url.json();
    // console.log(data)
    // console.log(data.persons)


    let countuser = data.persons.length
    console.log(countuser)
    setUserCount(countuser)
    setDetails(data.persons)

    console.log(userCount)

    if (userCount % userPerPage == 0) {
      var x = userCount / userPerPage
      setCount(x)
    }
    else {
      var x = userCount / userPerPage
      var y = Math.trunc(x)
      y++
      setCount(y)
    }
  }

  useEffect(() => {
    dataFetch();
  }, [])

  useEffect(() => {
    // setDetails(data.persons)
    // let userCount = details.length

    if (userCount % userPerPage == 0) {
      var x = userCount / userPerPage
      setCount(x)
    }
    else {
      var x = userCount / userPerPage
      var y = Math.trunc(x)
      y++
      setCount(y)
    }
    setTo((p) => Number(userPerPage))
  }, [userPerPage])

  const handleNextPage = () => {
    if (currentPage < count) {
      setPage((prev) => prev + 1)
      // console.log(data.persons.length)
      // console.log(count)
      setCurrentPage((prev) => prev + 1)
      setFrom((p) => p + Number(userPerPage))
      setTo((p) => p + Number(userPerPage))
      console.log(currentPage)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage((prev) => prev - 1)
      setCurrentPage((prev) => prev - 1)
      setFrom((p) => p - userPerPage)
      setTo((p) => p - userPerPage)
    }
    // console.log(userPerPage)
  }

  const handleSetBtn = () => {
    setDropdown(!dropdown)
  }

  const handleCheckUId = () => {
    setCheckUId(!checkUId)
  }
  const handleCheckName = () => {
    setCheckName(!checkName)
  }
  const handleCheckAdd = () => {
    setCheckAdd(!checkAdd)
  }
  const handleCheckMob = () => {
    setCheckMob(!checkMob)
  }

  return (
    <>
      <div>
        <div className='headDiv'>
          <h1>USER DETAILS</h1>
          <button onClick={handleSetBtn} >HIDE COL</button>
        </div>
        <div className={"dropdown " + (!dropdown ? 'hidden' : '')}>
          <label className='labels'>
            <input type='checkbox' checked={!checkUId} onChange={handleCheckUId}></input>
            <p>USER ID</p>
          </label>
          <label className='labels'>
            <input type='checkbox' checked={!checkName} onChange={handleCheckName}></input>
            <p>NAME</p>
          </label>
          <label className='labels'>
            <input type='checkbox' checked={!checkAdd} onChange={handleCheckAdd}></input>
            <p>ADDRESS</p>
          </label>
          <label className='labels'>
            <input type='checkbox' checked={!checkMob} onChange={handleCheckMob}></input>
            <p>MOBILE</p>
          </label>
        </div>

        {/* <select>
          <option>USER ID</option>
          <option>NAME</option>
          <option>ADDRESS</option>
          <option>MOBILE</option>
        </select> */}
        {/* <button onClick={handleClick}>click</button> */}
        <table>
          <tr>
            {checkUId ? <th>USER ID</th> : ''}
            {checkName ? <th>NAME</th> : ''}
            {checkAdd ? <th>ADDRESS</th> : ''}
            {checkMob ? <th>MOBILE</th> : ''}


          </tr>
          {
            details && details
              .slice(page * userPerPage, page * userPerPage + userPerPage)
              .map((user) => (
                // <div key={user.id}>
                //   {user.Name}
                // </div>
                <tr className={`userdiv${user.Id}`} key={user.Id}>

                  {checkUId ? <td>{user.Id}</td> : ''}


                  {checkName ? <td>{user.Name}</td> : ''}
                  {checkAdd ? <td>{user.Address}</td> : ''}
                  {checkMob ? <td>{user.Mobile}</td> : ''}
                </tr>
              ))
          }
        </table>
        <div className='detailDiv'>
          <div>
            <select onChange={(e) => setUserPerPage(e.target.value)} defaultValue={10}>
              <option key='1' value='10'>10</option>
              <option key='2' value='15'>15</option>
              <option key='3' value='20'>20</option>
            </select>
          </div>
          <div className='pageDet'>Showing {from}/{to} of page {currentPage} </div>
          <div>Page  {currentPage}/{count}</div>
        </div>
        <div className='btnDiv'>
          <div>
            <button onClick={handlePrevPage} className='btnNxt'>
              &lt;
            </button>
            <button onClick={handleNextPage} className='btnNxt'>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
