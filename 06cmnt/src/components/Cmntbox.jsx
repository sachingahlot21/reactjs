import React, { useState } from 'react'
import { cmnt } from '../utils/Constants'
import { FaReply } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useCmnt } from '../context/CmntContext';

// import { cmnt, myDetails, pPic } from './utils/Constants'
import { myDetails } from '../utils/Constants';

function Cmntbox({ name, time, cmnt, likes, imgsrc, id }) {

    const [cmntData, setCmntData] = useState(cmnt)
    const [isCmntEditable, setIsCmntEditable] = useState(false)
    const [isReply, setIsReply] = useState(false)
    const [reply, setReply] = useState('')
    const { deleteCmnt, editCmnt } = useCmnt()
    const [allReply, setAllReply] = useState([])

    const deleteCmntFunc = (id) => {
        deleteCmnt(id)

    }

    const editCmntFunc = () => {

        setIsCmntEditable(!isCmntEditable)
        // editCmnt(id, { name: name, time: time, likes: likes, imgsrc: imgsrc, cmnt: cmntData })

    }
    function handleReply(name) {
        setIsReply(!isReply)
    }

    function addReply() {
        setAllReply((prev) => [...prev, reply])
        setReply('')
    }

    return (
        <>
            <div className='rounded-md w-[90%] h-[24vh] bg-white mb-4 m-auto flex p-4'>
                <div className=' w-[9%] h-[100%] flex '>
                    <div className='bg-[rgb(224,225,227)] w-[70%] h-[80%] rounded-md '>
                        {/* <span className='w-[30px] h-[20px] bg-green-200'>d</span>
                    <span></span>
                    <span className='w-[100%] h-[20%] bg-green-400'>d</span> */}
                        <div className='w-[100%] h-[30%] flex justify-center items-center'>
                            <span className='text-xs'><FaPlus className='text-[rgb(175,147,224)]' /></span>
                        </div>
                        <div className='w-[100%] h-[40%] flex justify-center items-center'><h1 className='font-bold text-[rgb(124,75,210)]'>{likes}</h1></div>
                        <div className='w-[100%] h-[30%] flex justify-center items-center'>
                            <span className='text-xs'><FaMinus className='text-[rgb(175,147,224)]' /></span>
                        </div>
                    </div>
                </div>

                <div className=' w-[95%] h-[100%] '>
                    <div className='w-[100%] h-[30%] flex justify-between '>
                        <div className='flex gap-3'>
                            <div className='w-[30px] h-[30px] rounded-full object-cover bg-gray-400'>
                                <img className='w-[100%] h-[100%] rounded-[50%]' src={imgsrc} alt='no img' />
                            </div>
                            <h1 className='font-bold'>{name}</h1>
                            <span className='font-semibold text-[rgb(158,159,159)]'>{time}</span>
                        </div>
                        <div className='flex gap-3'>
                            {
                                name != 'juliusomo' ?
                                    <button className='flex gap-1 font-bold text-[rgb(124,75,210)]' onClick={() => handleReply(name)}><span className='m-auto'><FaReply /></span>Reply</button>
                                    : ''
                            }
                            {
                                name == 'juliusomo' ?
                                    <button className='flex gap-1 text-[red] font-bold ' onClick={() => deleteCmntFunc(id)}><span className='m-auto'><MdDelete /></span>Delete</button>
                                    : ''
                            }
                            {
                                name == 'juliusomo' ?
                                    <button onClick={editCmntFunc} className='flex gap-1 font-bold text-[rgb(124,75,210)]'><span className='m-auto'><MdEdit /></span>{isCmntEditable ? 'SAVE' : 'EDIT'}</button>
                                    : ''
                            }
                        </div>
                    </div>

                    <div className='w-[100%] h-[70%] p-2 '>
                        {/* <p className='text-sm font-sans text-[rgb(158,159,159)]'>{cmnt}</p> */}

                        {/* <input type='text'  value={cmnt} readOnly className='text-sm font-sans text-[rgb(158,159,159)] w-[100%] h-[100%]' ></input> */}

                        <textarea onChange={(e) => setCmntData(e.target.value)} readOnly={!isCmntEditable} spellCheck='false' id='textarea1' className={` resize-none text-sm font-sans text-[rgb(158,159,159)] w-[100%] h-[100%] ${isCmntEditable ? "border-2 outline-none " : 'border-0 outline-none'}`}>
                            {cmntData}
                        </textarea>
                    </div>
                </div>
                {/*    */}

            </div>


            {
                allReply.map((value) => (

                    <div className='rounded-md w-[60%] h-[14vh] bg-white mb-4 ml-[30%] flex p-4'>
                        {/* <div className=' w-[9%] h-[100%] flex '>
                            <div className='bg-[rgb(224,225,227)] w-[70%] h-[80%] rounded-md '>

                                <div className='w-[100%] h-[30%] flex justify-center items-center'>
                                    <span className='text-xs'><FaPlus className='text-[rgb(175,147,224)]' /></span>
                                </div>
                                <div className='w-[100%] h-[40%] flex justify-center items-center'><h1 className='font-bold text-[rgb(124,75,210)]'>{likes}</h1></div>
                                <div className='w-[100%] h-[30%] flex justify-center items-center'>
                                    <span className='text-xs'><FaMinus className='text-[rgb(175,147,224)]' /></span>
                                </div>
                            </div>
                        </div> */}

                        <div className=' w-[95%] h-[100%] '>
                            <div className='w-[100%] h-[30%] flex justify-between '>
                                <div className='flex gap-3'>
                                    <div className='w-[30px] h-[30px] rounded-full object-cover bg-gray-400'>
                                        <img className='w-[100%] h-[100%] rounded-[50%]' src={imgsrc} alt='no img' />
                                    </div>
                                    <h1 className='font-bold'>{name}</h1>
                                    <span className='font-semibold text-[rgb(158,159,159)]'>{time}</span>
                                </div>
                                {/* <div className='flex gap-3'>
                                    {
                                        name != 'juliusomo' ?
                                            <button className='flex gap-1 font-bold text-[rgb(124,75,210)]' ><span className='m-auto'><FaReply /></span>Reply</button>
                                            : ''
                                    }

                                </div> */}
                            </div>

                            <div className='w-[100%] h-[70%] p-2 '>
                                {/* <p className='text-sm font-sans text-[rgb(158,159,159)]'>{cmnt}</p> */}

                                {/* <input type='text'  value={cmnt} readOnly className='text-sm font-sans text-[rgb(158,159,159)] w-[100%] h-[100%]' ></input> */}

                                <textarea readOnly spellCheck='false' id='textarea1' className={` resize-none text-sm font-sans text-[rgb(158,159,159)] w-[100%] h-[100%] ${isCmntEditable ? "border-2 outline-none " : 'border-0 outline-none'}`}>
                                    {value}
                                </textarea>
                            </div>
                        </div>
                        {/*    */}

                    </div>


                ))
            }






            {
                isReply &&
                <div className='w-[90%] h-[20vh]  flex justify-end items-end'>
                    <div className={'rounded-md w-[70%] h-[16vh] bg-white mb-4  flex '}>

                        <div className='rounded-md w-[90%] h-[16vh] bg-white mb-4 m-auto flex gap-4 p-4'>

                            <img className='object-cover w-8 h-8 rounded-full' src={myDetails.profilePic} />


                            <input className='w-[75%] border border-gray-200 rounded-md p-0' type='text' value={reply} placeholder='Reply a comment...' onChange={(e) => setReply(e.target.value)} >

                            </input>

                            <button onClick={addReply} className='bg-[rgb(124,75,210)] w-[20%] h-[40%] rounded-md text-white' >REPLY</button>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}

export default Cmntbox