'use client';
import React, { useState } from 'react'

const NavBottom = () => {
  const [activeTab, setActiveTab] = useState('job');

  return (
    <div className='max-w-[108rem] mx-auto'>
        <div className=' sm:px-20 border-b-[1px] border-neutral-grey-1'>
            <div className=' flex justify-center items-center w-fit md:gap-[4.5rem] sm:gap-[4rem] gap-5 px-2 text-md font-medium text-neutral-grey-4 mx-auto sm:mx-0 font-generalsans'>
              
                    <div onClick={()=>setActiveTab('job')} className={` ${activeTab==='job'?"text-orange-300 font-[600] border-b-2 border-orange-300 " : ""} py-3 cursor-pointer`}>Job preview</div>
                    <div onClick={()=>setActiveTab('applicant')} className={` ${activeTab==='applicant'?"text-orange-300 font-[600] border-b-2 border-orange-300 " : ""} py-3 cursor-pointer`}>Applicants</div>
                    <div onClick={()=>setActiveTab('match')} className={` ${activeTab==='match'?"text-orange-300 font-[600] border-b-2 border-orange-300 " : ""} py-3 cursor-pointer`}>Match</div>
                    <div onClick={()=>setActiveTab('message')} className={` ${activeTab==='message'?"text-orange-300 font-[600] border-b-2 border-orange-300 " : ""} py-3 cursor-pointer`}>Messages</div>
                
              

            </div>

        </div>
    </div>
  )
}

export default NavBottom