'use client'
import Image from "next/image";
import React, { useState } from "react";
import { PiBellSimple } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import NavTabs from "./NavTabs";
import { PiHandCoins } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";


const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" max-w-[108rem] relative border-b-[1px] border-neutral-grey-1 mx-auto">
      <nav className="flex items-center justify-between  py-6 sm:py-2 px-10">
        <div className="bg-neutral-grey-1 px-7 py-2 cursor-pointer">
          <div className="text-orange-300 font-bold font-satoshivariable text-xl ">
            Logo
          </div>
        </div>

        <NavTabs />
        <div className="flex items-center gap-2 p-2 justify-center">
          <div className="relative p-1 hover:cursor-pointer  hover:bg-neutral-grey-1 rounded-full">
            <div>
              <div className="absolute bg-orange-300 h-[6px] w-[6.5px] rounded-full top-[6px] right-[6.5px]"></div>
              <div>
                <PiBellSimple className="text-3xl" />
              </div>
            </div>
          </div>
          <div
           onClick={()=>setOpen((val)=>!val)}
           className="p-1 hover:cursor-pointer hover:bg-neutral-grey-1 rounded-full">
            <div className="flex items-center justify-center gap-1 ">
              <Image
                src="/atlassian-logo.png"
                width={40}
                height={40}
                alt="logo"
                className="rounded-full h-9 w-9"
              />
              <div>
                <FaAngleDown className="text-xs font-extralight" />
              </div>
            </div>
          </div>
        </div>
       
        
      </nav>
      <div className={` ${open? "" : "hidden "} absolute border border-neutral-grey-1 shadow-3xl w-44 bg-white rounded-md right-4 top-[5.3rem] sm:top-[4.6rem] px-2 py-1`}>
        <div className="sm:hidden group text-text-2 font-generalsans font-semibold w-full flex justify-between items-center text-lg p-2 border-b-[1px] border-neutral-grey-1 rounded-md  hover:text-orange-300 hover:cursor-pointer  ">
          <div>Jobs</div>
          <FiBriefcase className="text-md text-text-1 group-hover:text-orange-300" />
        </div>
        <div className="sm:hidden group text-text-2 font-generalsans font-semibold w-full flex justify-between items-center text-lg p-2 border-b-[1px] border-neutral-grey-1 rounded-md  hover:text-orange-300 hover:cursor-pointer ">
          <div>Messages</div>
          <FiMessageSquare className="text-md text-text-1 group-hover:text-orange-300" />
        </div>
        <div className="sm:hidden group text-text-2 font-generalsans font-semibold w-full flex justify-between items-center text-lg p-2 border-b-[1px] border-neutral-grey-1 rounded-md  hover:text-orange-300 hover:cursor-pointer ">
          <div>Payments</div>
          <PiHandCoins className="text-md text-text-1 group-hover:text-orange-300" />
        </div>
        <div className="group text-text-2 font-generalsans font-semibold w-full flex justify-between items-center text-lg p-2 rounded-md  hover:text-orange-300 hover:cursor-pointer ">
          <div>Log Out</div>
          <FiLogOut className="text-md text-text-1 group-hover:text-orange-300" />
        </div>
        </div>
    </div>
  );
};

export default Nav;
