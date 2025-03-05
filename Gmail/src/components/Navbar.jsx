import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import Avatar from "react-avatar";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between mx3 h-16">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <RxHamburgerMenu size={"20"} />
                    </div>
                    <img
                        className="w-10 h-8"
                        src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                        alt=""
                    />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF2FB] py-3 px-2 rounded-full">
                    <IoIosSearch size={"24"} className="text-gray-700" />
                    <input
                        type="text"
                        placeholder="Search mail"
                        className="bg-transparent outline-none border-none px-1"
                    />
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiCircleQuestion size={"24"} />
                    </div>
                    <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoIosSettings size={"24"} />
                    </div>
                    <div className=" cursor-pointer">
                        <Avatar src="https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg" size="30" round={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;