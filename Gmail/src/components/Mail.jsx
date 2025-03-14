import React from 'react'
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

const Mail = () => {
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <IoMdArrowBack size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <BiArchiveIn size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdOutlineReport size={'20px'}/>
          </div>
          
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdDeleteOutline size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdOutlineMarkEmailUnread size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdOutlineWatchLater size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdOutlineAddTask size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <MdOutlineDriveFileMove size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
              <IoMdMore size={'20px'}/>
          </div>
        </div>
        <div className='flex items-center gap-2'>
            <button className='hover:rounded-bl-full hover:bg-gray-100'><MdKeyboardArrowLeft size={'20px'} /></button>
            <button className='hover:rounded-bl-full hover:bg-gray-100'><MdKeyboardArrowRight size={'20px'} /></button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className='flex justify-between bg-white items-center gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>
          </div>
          <div  className='flex-none text-gray-400 my-5 text-sm'>
            <p>12-08-2024</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm'>
          <h1>pranav@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className='my-10'>
          <p>massage</p>
        </div>
      </div>
    </div>
  )
}

export default Mail