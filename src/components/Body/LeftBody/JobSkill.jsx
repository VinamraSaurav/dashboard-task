import Image from "next/image";
import React from "react";
import FieldDesc from "../FieldDesc";

const JobSkill = () => {
  return (
    <div>
      <div className="border-b-[1px] border-neutral-grey-1">
        <div className="md:pl-[6.25rem] px-3 sm:pl-10  pt-9 pb-9 flex gap-x-2 md:gap-x-16 font-generalsans flex-wrap">
          <div className="flex flex-col gap-2 justify-center font-generalsans w-[10.625rem] my-2 sm:my-0">
            <div className="text-text-1 text-sm font-medium">
              Skills Required
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-text-secondary text-xs font-semibold flex items-center justify-center w-fit px-[0.375rem] py-[2px] border border-border-primary rounded-md gap-[3px] ">
                <Image
                  src="/figma-logo.png"
                  width={40}
                  height={40}
                  alt="logo"
                  className=" h-4 w-4"
                  unoptimized
                  quality={100}
                />
                <div>Figma</div>
              </div>
              <div className="text-text-secondary text-xs font-semibold flex items-center justify-center w-fit px-[0.375rem] py-[2px]  border border-border-primary rounded-md gap-[3px] ">
                <Image
                  src="/adobe-illustrator.png"
                  width={40}
                  height={40}
                  alt="logo"
                  className=" h-4 w-4"
                  unoptimized
                  quality={100}
                />
                <div>Adobe Illustrator</div>
              </div>
              <div className="text-text-secondary text-xs font-semibold flex items-center justify-center w-fit px-[0.375rem] py-[2px]  border border-border-primary rounded-md gap-[3px] ">
                <Image
                  src="/xd-logo.png"
                  width={40}
                  height={40}
                  alt="logo"
                  className=" h-4 w-4"
                  unoptimized
                  quality={100}
                />
                <div>Adobe XD</div>
              </div>
            </div>
          </div>
          <div className="w-[10.625rem] my-2 sm:my-0">
            <FieldDesc title={"Preffered Language"} desc={"English"} />
          </div>
          <div className="w-[10.625rem] my-2 sm:my-0">
            <FieldDesc title={"Type"} desc={"Full Time"} />
          </div>
          <div className="w-[10.625rem] my-2 sm:my-0">
            <FieldDesc
              title={"Years of Experience"}
              desc={"3+ Years of Experience"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSkill;
