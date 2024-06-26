import Image from 'next/image'
import React from 'react'
import FieldDesc from '../FieldDesc'

const Footer = () => {
  return (
    <div>
    
        <div className="px-20 py-9 flex flex-col gap-y-4 font-generalsans">

            <div className='p-[0.625rem] pl-0 flex gap-x-3 items-center'>
                <Image src = '/atlassian-logo.png' width={40} height={40} alt='logo' className='h-10 w-10' unoptimized quality={100}/>
                <div className='font-generalsans text-xl font-medium text-text-3'>Atlassian</div>
            </div>

            <div className='grid grid-cols-2 gap-x-12 gap-y-6'>
                <FieldDesc title={"Company size"} desc={"1k - 2k Employees"} />
                <FieldDesc title={"Type"} desc={"Private"} />
                <FieldDesc title={"Sector"} desc={"Information Technology, Infrastructure"} />
                <FieldDesc title={"Funding"} desc={"Bootstrapped"} />
                <FieldDesc title={"Founded In"} desc={"2009"} />
                <FieldDesc title={"Founded By"} desc={"Scott Farquhar, Mike Cannon-Brookes"} />
            </div>
        </div>
        
    </div>
  )
}

export default Footer