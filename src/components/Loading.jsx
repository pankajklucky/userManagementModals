import React from 'react'
import {FaSpinner} from 'react-icons/fa'
const Loading = () => {
  return (
      <>
      <div className='flex justify-center'>
      <div className='flex justify-center  w-screen h-screen '>
      
      <div className='flex items-center justify-center '> <FaSpinner className='text-5xl animate-spin text-red-500'/></div>
      </div>

      </div>
      </>
  )
}

export default Loading