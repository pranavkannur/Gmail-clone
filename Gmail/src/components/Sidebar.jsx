import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';
import { MdOutlineWatchLater } from 'react-icons/md';
import { TbSend2 } from 'react-icons/tb';
import { MdInbox } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompose } from '../redux/mailSlice';
import { useNavigate } from 'react-router-dom';

const SidebarItems = [
    {
        icon: <MdInbox size={'24px'} />,
        text: "Inbox",
        count: "inbox",
        path: "/"
    },
    {
        icon: <IoMdStar size={'24px'} />,
        text: "Starred",
        count: "starred",
        path: "/starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed",
        count: null,
        path: "/snoozed"
    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Sent",
        count: "sent",
        path: "/sent"
    },
    {
        icon: <MdDrafts size={'24px'} />,
        text: "Drafts",
        count: null,
        path: "/drafts"
    },
    {
        icon: <RiArrowDownSLine size={'24px'} />,
        text: "More",
        count: null,
        path: "/more"
    },
];

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mails = useSelector(state => state.mail.mails);
    
    const handleCompose = () => {
        dispatch(toggleCompose());
    };
    
    const getMailCount = (type) => {
        if (type === "inbox") {
            return mails.filter(mail => mail.folder === "inbox").length;
        } else if (type === "starred") {
            return mails.filter(mail => mail.starred).length;
        } else if (type === "sent") {
            return mails.filter(mail => mail.folder === "sent").length;
        }
        return 0;
    };

    return (
        <div className="w-64 pr-3">
            <div className='w-[100%]'>
                <div className='p-3'>
                    <button 
                        className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'
                        onClick={handleCompose}
                    >
                        <LuPencil size={'24px'} />
                        Compose
                    </button>
                </div>
                <div className='text-gray-500'>
                    {
                        SidebarItems.map((item, index) => {
                            const count = item.count ? getMailCount(item.count) : null;
                            
                            return (
                                <div 
                                    key={index} 
                                    className='flex items-center justify-between pl-4 pr-3 py-2 rounded-r-full hover:cursor-pointer hover:bg-gray-200'
                                    onClick={() => navigate(item.path)}
                                >
                                    <div className='flex items-center gap-4'>
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </div>
                                    {count > 0 && (
                                        <span className="text-sm font-medium">{count}</span>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;