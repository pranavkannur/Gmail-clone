import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Massage = ({ id, sender, subject, message, date }) => {
    const navigate = useNavigate();

    const openMail = () => {
        navigate(`/mail/${id}`)
    }
    
    return (
        <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md" >
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdCropSquare className="w-5 h-5" />
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarLine className="w-5 h-5" />
                </div>
                <div>
                    <h1 className="font-semibold">{sender || "Unknown Sender"}</h1>
                </div>
            </div>
            <div className="flex-1 ml-4">
                <p className="font-medium">{subject || "No Subject"}</p>
                <p className="text-gray-600 truncate inline-block max-w-full">
                    {message || "No message content"}
                </p>
            </div>
            <div className="flex-none text-gray-400 text-sm">
                <p>{date || "No date"}</p>
            </div>
        </div>
    )
}

export default Massage