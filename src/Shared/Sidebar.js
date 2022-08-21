import React from 'react'
import { BsCalendar2Date, BsChatLeftDots, BsClock, BsHouseDoorFill } from 'react-icons/bs'
import { MdOutlineContacts } from 'react-icons/md'
import { FaVideo } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="section fixed top-0 left-0 ">
        <div className="sid-bar bg-slate-700 w-24 flex justify-center pb-40 border-r-1 border-gray-500"> 
                <ul>
                    <li className='text-white bg-[#0e78f9] text-2xl text-center w-14 h-14 rounded-lg m-4'>
                        <Link className='flex justify-center py-4' to={'/'}> <FaVideo/> </Link>
                    </li>
                    <li className='text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-20'>
                        <Link className='flex justify-center py-4' to={'/'}> <BsHouseDoorFill/> </Link>
                    </li>
                    <li className='text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4'>
                        <Link className='flex justify-center py-4' to={'/'}> <BsChatLeftDots/> </Link>
                    </li>
                    <li className='text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4'>
                        <Link className='flex justify-center py-4' to={'/'}> <BsClock/> </Link>
                    </li>
                    <li className='text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4'>
                        <Link className='flex justify-center py-4' to={'/'}> <MdOutlineContacts/> </Link>
                    </li>
                    <li className='text-white text-2xl text-center w-14 h-14 rounded-lg m-4 mt-4'>
                        <Link className='flex justify-center py-4' to={'/'}> <BsCalendar2Date/> </Link>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Sidebar
