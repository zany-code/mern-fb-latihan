import React from "react";
import { BsFacebook, BsSearch, BsFillPeopleFill, BsPlusCircle } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdHome, MdMessage, MdNotifications } from "react-icons/md";
import { CgMenuGridO, CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-between h-[50px] items-center shadow-lg mx-5">
        <div className=" flex">
          <BsFacebook className=" text-blue-900 text-4xl cursor-pointer" />
          <div className=" flex items-center ml-2">
            <BsSearch className=" text-gray-400 cursor-pointer" />
            <input
              type="text"
              placeholder="Cari di bookstory"
              className=" outline-none ml-1"
            />
          </div>
        </div>

        <div className=" flex gap-6">
          <MdHome className=" text-3xl cursor-pointer active:text-blue-900" />
          <BsFillPeopleFill className=" text-3xl cursor-pointer active:text-blue-900" />
          <IoIosPeople className=" text-3xl cursor-pointer active:text-blue-900" />
        </div>

        <div className=" flex gap-5">
          <button className=" bg-gray-300 rounded-lg p-1 text-sm">
            Cari Teman
          </button>
          <CgMenuGridO className=" text-2xl cursor-pointer active:text-blue-900" />
          <MdMessage className=" text-2xl cursor-pointer active:text-blue-900" />
          <MdNotifications className=" text-2xl cursor-pointer active:text-blue-900" />
          <CgProfile className=" text-2xl cursor-pointer active:text-blue-900" />
        </div>
      </div>

      <div className=" flex justify-between h-[50px] items-center shadow-lg mx-5 md:hidden">
          <div className=" flex items-center">
            <BsFacebook className=" text-blue-900 text-4xl cursor-pointer" />
            <BsSearch className="cursor-pointer ml-2 text-xl" />
          </div>
          <div className=" flex items-center gap-3">
            <BsPlusCircle className="text-xl cursor-pointer active:text-blue-900"/>
            <MdMessage className=" text-xl cursor-pointer active:text-blue-900" />
            <MdNotifications className=" text-xl cursor-pointer active:text-blue-900" />
            <CgProfile className=" text-xl cursor-pointer active:text-blue-900" />
          </div>
      </div>
    </>
  );
};

export default Navbar;
