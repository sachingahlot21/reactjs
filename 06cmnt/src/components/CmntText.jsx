import React from 'react'

function CmntText({ profilePic, name }) {
    return (
        <div className='rounded-md w-[90%] h-[24vh] bg-white mb-4 m-auto flex gap-4 p-4'>

            <img className='object-cover w-8 h-8 rounded-full' src={profilePic} />
            <input className='w-[75%] border border-gray-200 rounded-md p-0' type='text' placeholder='Add a comment...'></input>
            <button className='bg-[rgb(124,75,210)] w-[20%] h-[40%] rounded-md text-white'>SEND</button>
        </div>
    )
}

export default CmntText