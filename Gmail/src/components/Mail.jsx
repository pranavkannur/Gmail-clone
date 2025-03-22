import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { deleteMail, toggleStarred } from '../redux/mailSlice';

const Mail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const mail = useSelector(state => 
    state.mail.mails.find(mail => mail.id === id)
  );

  const handleBack = () => {
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteMail(id));
    navigate('/');
  };

  const handleToggleStarred = () => {
    dispatch(toggleStarred(id));
  };

  if (!mail) {
    return (
      <div className='flex-1 bg-white rounded-xl mx-5 p-8'>
        <div className='text-center'>
          <h2 className='text-xl font-medium mb-4'>Email not found</h2>
          <button 
            onClick={handleBack}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer' onClick={handleBack}>
            <IoMdArrowBack size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <BiArchiveIn size={'20px'}/>
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <MdOutlineReport size={'20px'}/>
          </div>
          
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer' onClick={handleDelete}>
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
            <h1 className='text-xl font-medium'>{mail.subject}</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>{mail.folder}</span>
            <div className='cursor-pointer' onClick={handleToggleStarred}>
              {mail.starred ? 
                <RiStarFill size={'20px'} className="text-yellow-400" /> : 
                <RiStarLine size={'20px'} className="text-gray-400" />
              }
            </div>
          </div>
          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>{mail.date}</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm flex items-center gap-2 mt-2'>
          <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white'>
            {mail.sender.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1>{mail.sender}</h1>
            <span>to me</span>
          </div>
        </div>
        <div className='my-10 whitespace-pre-line'>
          <p>{mail.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;