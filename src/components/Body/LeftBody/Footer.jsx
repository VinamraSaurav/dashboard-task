import Image from "next/image";
import React from "react";
import FieldDesc from "../FieldDesc";

const Footer = () => {
  return (
    <div>
      <div className="px-3 sm:pl-10 md:px-[6.25rem] pt-11 pb-9 flex flex-col gap-y-4 font-generalsans mt-2">
        <div className="p-[0.625rem] pl-0 flex gap-x-3 items-center">
          <Image
            src="/atlassian-logo.png"
            width={40}
            height={40}
            alt="logo"
            className="h-10 w-10"
            unoptimized
            quality={100}
          />
          <div className="font-generalsans text-xl font-medium text-text-3">
            Atlassian
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          
          <div className="flex gap-x-12">
          <div className="w-[21.5rem]">
            <FieldDesc title={"Company size"} desc={"1k - 2k Employees"} />
          </div>
          <div className="w-[21.5rem]">
            <FieldDesc title={"Type"} desc={"Private"} />
          </div>
          </div>
          <div className="flex gap-x-12">
          <div className="w-[21.5rem]">
            <FieldDesc
              title={"Sector"}
              desc={"Information Technology, Infrastructure"}
            />
          </div>
          <div className="w-[21.5rem]">
            <FieldDesc title={"Funding"} desc={"Bootstrapped"} />
          </div>
          </div>
          <div className="flex gap-x-12">
          <div className="w-[21.5rem]">
            <FieldDesc title={"Founded In"} desc={"2009"} />
          </div>
          <div className="w-[21.5rem]">
            <FieldDesc
              title={"Founded By"}
              desc={"Scott Farquhar, Mike Cannon-Brookes"}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
