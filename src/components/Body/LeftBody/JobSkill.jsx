import Image from 'next/image'
import React from 'react'
import FieldDesc from '../FieldDesc'

const JobSkill = () => {
  return (
    <div>
      <div className="border-b-[1px] border-neutral-grey-1">
        <div className="px-20 py-9 flex gap-x-16 font-generalsans flex-wrap">
          <div className="flex flex-col gap-2 justify-center font-generalsans">
            <div className="text-text-1 text-base font-medium">
              Skills Required
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-text-secondary text-xs font-medium flex items-center justify-center w-fit px-2 p-1 border border-border-primary rounded-lg gap-1 ">
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
              <div className="text-text-secondary text-xs font-medium flex items-center justify-center w-fit px-2 p-1  border border-border-primary rounded-lg gap-1 ">
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
              <div className="text-text-secondary text-xs font-medium flex items-center justify-center w-fit px-2 p-1  border border-border-primary rounded-lg gap-1 ">
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

          <FieldDesc title={"Preffered Language"} desc={"English"} />
          <FieldDesc title={"Type"} desc={"Full Time"} />
          <FieldDesc
            title={"Years of Experience"}
            desc={"3+ Years of Experience"}
          />
        </div>
      </div>
    </div>
  )
}

export default JobSkill