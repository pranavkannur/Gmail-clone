import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const SendMail = () => {
  return (
    <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md'>
        <div className='flex px-3 py-3 bg-[#F2F6FC] justify-between rounded-t-md'>
            <h1>New Message</h1>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <RxCross2 size={'15px'}/>
            </div>
        </div>
        <form action="" className='flex flex-col p-3'>
            <input type="text" placeholder='To' className='outline-none py-2 px-2 border-b' />
            <input type="text" placeholder='Subject' className='outline-none py-2 px-2 border-b' />
            <textarea 
                name="message" 
                placeholder='Message' 
                className='outline-none py-3 px-2 min-h-32'
            ></textarea>
            <div className='flex justify-end mt-4'>
                <button type='submit' className='bg-[#0B57D0] rounded-md px-6 py-2 text-white font-medium'> 
                    Send
                </button>
            </div>
        </form>
    </div>
  )
}

export default SendMail