import React from 'react'
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";




const RightBody = () => {
  return (
    <div className='bg-right-control border-l-[1px] border-b-[1px] border-neutral-grey-1 py-9 px-6 h-full w-full shadow-3xl flex flex-col gap-y-6'>
        <div className='flex justify-center items-center gap-x-6 font-generalsans'>
            <div className='py-3 px-6 flex justify-center items-center text-orange-300 border border-orange-300 bg-orange-50 gap-x-2 rounded-md w-40 '>
                <GoTrash className='text-xl'/>
                <div className='text-base'>Delete job</div>
            </div>
            <div className='py-3 px-6 flex justify-center items-center text-white border border-orange-150 bg-orange-300 gap-x-2 rounded-md w-40 '>
                <GoPencil className='text-xl'/>
                <div className='text-base'>Edit job</div>
            </div>
        </div>
        <div className='w-full font-generalsans'>
            <div className='flex justify-between p-3 items-center border-b-[1px] border-neutral-grey-1 w-full'>
                <div className='flex p-2 items-center justify-center text-text-3 font-medium gap-2'>
                    <TbUsers className='text-xl'/>
                    <div className='text-base'>Applicants</div>
                </div>
                <div className='flex p-2 items-center justify-center text-text-5 font-[600]'>
                    <div className='text-xl'>400</div>
                </div>

            </div>
            <div className='flex justify-between p-3 items-center border-b-[1px] border-neutral-grey-1 w-full'>
                <div className='flex p-2 items-center justify-center text-text-3 font-medium gap-2'>
                    <TbUserCheck className='text-xl'/>
                    <div className='text-base'>Matches</div>
                </div>
                <div className='flex p-2 items-center justify-center text-text-5 font-[600]'>
                    <div className='text-xl'>100</div>
                </div>

            </div>
            <div className='flex justify-between p-3 items-center border-b-[1px] border-neutral-grey-1 w-full'>
                <div className='flex p-2 items-center justify-center text-text-3 font-medium gap-2'>
                    <FiMessageSquare className='text-xl'/>
                    <div className='text-base'>Messages</div>
                </div>
                <div className='flex p-2 items-center justify-center text-text-5 font-[600]'>
                    <div className='text-xl'>147</div>
                </div>

            </div>
            <div className='flex justify-between p-3 items-center border-b-[0px] border-neutral-grey-1 w-full'>
                <div className='flex p-2 items-center justify-center text-text-3 font-medium gap-2'>
                    <LuEye className='text-xl'/>
                    <div className='text-base'>Views</div>
                </div>
                <div className='flex p-2 items-center justify-center text-text-5 font-[600]'>
                    <div className='text-xl'>800</div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default RightBody