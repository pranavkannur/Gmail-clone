import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIoSearch } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'> 
                <div className= 'p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <HamburgerMenu size= {"20"}/>
                </div>
                <img className='w-8' src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png" alt="gmail-Logo" />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>   
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className='flex items-center bg -[#EAF2FB] py-3 px-2 rounded-full'>
                <IoIoSearch size={"24"} className='text-gray-700'/>
                <input type="text" placeholder='Search mail' className='bg-transparent outline-none border-none px-1'/>
            </div>

        </div>
        <div className=''>

        </div>

    </div>
  )
}

export default Navbar