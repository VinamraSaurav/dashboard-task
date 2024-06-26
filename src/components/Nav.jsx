import Image from "next/image";
import React from "react";
import { PiBellSimple } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import NavTabs from "./NavTabs";

const Nav = () => {
  return (
    <div className=" max-w-[108rem] py-6 sm:py-2 px-10 border-b-[1px] border-neutral-grey-1 mx-auto">
      <nav className="flex items-center justify-between">
        <div className="bg-neutral-grey-1 px-7 py-2 cursor-pointer">
          <div className="text-orange-300 font-bold font-satoshivariable text-xl ">
            Logo
          </div>
        </div>

        <NavTabs />
        <div className="flex items-center gap-2 p-2 justify-center">
          <div className="relative p-1 cursor-pointer">
            <div>
              <div className="absolute bg-orange-300 h-[4.5px] w-[5px] rounded-full top-[7.3px] right-[7px]"></div>
              <div>
                <PiBellSimple className="text-3xl" />
              </div>
            </div>
          </div>
          <div className="p-1 cursor-pointer">
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
    </div>
  );
};

export default Nav;
