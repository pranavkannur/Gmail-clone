import React from 'react'

const SendMail = () => {
  return (
    <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md'>
        <div className='flex px-3 py-3 bg-[#F2F6FC] justify-between rounded-t-md'>
            <h1>New Message</h1>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <RxCross2 size={'10px'}/>
            </div>
        </div>
        <form action="" className='flex'>
            <input type="text" placeholder='To' className='outline-none py-1' />
            <input type="text" placeholder='To' className='outline-none py-1' />
            <textarea name="message" cols={'30'} rows={'10'} className='outline-none py-1'></textarea>
            <button type='Submit' className='bg-[#0B57D0] rounded-full w-fit-px-4 text-white font-medium'> Send</button>
        </form>
    </div>
  )
}

export default SendMail