import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { MdInbox } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const SidebarItems = [
    {
        icon: <MdInbox size={'24px'} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={'24px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <MdDrafts size={'24px'} />,
        text: "Drafts"
    },
    {
        icon: <RiArrowDownSLine size={'24px'} />,
        text: "More"
    },
]

const Sidebar = () => {
    return (
        <div>
            <div className='w-[15%]'>
                <div className='p-3'>
                    <button className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] '>
                        <LuPencil size={'24px'} />
                        Compose
                    </button>
                </div>
                <div className='text-gray-500'>
                    {
                        SidebarItems.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center gap-4 pl-4 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200'>
                                    {item.icon}
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar