import React from 'react'
import { Link } from 'react-router-dom'
import {ImUsers} from 'react-icons/im'

const Navbar = () => {
    return (
      <>
            <div className='w-min-full bg-red-500 h-10 px-4 py-2 mx-4 my-4 rounded-md flex justify-around'>
                <Link to={"/user"}   className='font-bold text-white hover:text-red-200 cursor-pointer'>All User</Link>
                <Link to={"/user/add"} className='font-bold text-white hover:text-red-200 cursor-pointer'>Add User</Link>
                
                <div className='flex gap-3'>
                <span  className='font-bold text-white'>User Management Module</span>
                <ImUsers className=' text-white text-4xl py-2'/>
                </div>
            
            </div>
      </>
  )
}

export default Navbar