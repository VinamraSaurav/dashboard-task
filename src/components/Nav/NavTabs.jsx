"use client";
import React, { useState } from "react";
import { PiHandCoins } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div>
      <div className="rounded-full border-[0.5px] p-[6px] border-neutral-grey-2 w-fit md:w-[33.625rem] hidden sm:block my-2">
        <div className="flex items-center justify-between">
          <div 
          onClick={() => setActiveTab('jobs')}
          className={` ${activeTab==='jobs'?"text-white bg-orange-300 border-nav-border-click border-2 rounded-full " : " text-neutral-grey-3 "} font-generalsans flex justify-center items-center gap-2 text-[1.5rem] font-light  p-3 md:p-4 cursor-pointer`}>
            <div>
              <FiBriefcase  />
            </div>
            <div className="font-medium text-xl">Jobs</div>
          </div>
          <div
            onClick={() => setActiveTab('messages')}
            className={` ${activeTab==='messages'?"text-white bg-orange-300 border-nav-border-click border-2 rounded-full " : " text-neutral-grey-3 "} font-generalsans flex justify-center items-center gap-2 text-xl font-light p-3 md:p-4 cursor-pointer`}>
            <div className="relative">
              <div className={` ${activeTab==='messages'?"hidden ":""}absolute bg-orange-300 h-[5.5px] w-[5px] rounded-full top-0 right-0`}></div>
              <div>
                <FiMessageSquare />
              </div>
            </div>
            <div className="font-medium text-xl">Messages</div>
          </div>
          <div 
            onClick={() => setActiveTab('payments')}
          className={` ${activeTab==='payments'?"text-white bg-orange-300 border-nav-border-click border-2 rounded-full " : " text-neutral-grey-3 "} font-generalsans flex justify-center items-center gap-2 text-xl font-light p-3 md:p-4 cursor-pointer`}>
            <div>
              <PiHandCoins />
            </div>
            <div className="font-medium text-xl">Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
