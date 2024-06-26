import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LiaCoinsSolid } from 'react-icons/lia'

const JobTitle = () => {
  return (
    <div>
         <div className="border-b-[1px] border-neutral-grey-1">
        <div className="px-20 py-9 gap-y-6 flex flex-col">
          <div className="flex jsutify-center items-center gap-3 font-generalsans flex-wrap">
            <div className="text-text-5 font-[600] text-4xl">
              Senior Product Designer
            </div>
            <div className="h-[6px] w-[6px] rounded-full bg-[#D1D1D1]"></div>
            <div className="text-neutral-grey-4 text-sm font-medium">
              posted 2 days ago
            </div>
            <div className="flex border border-utility-success-200 bg-utility-success-50 rounded-full gap-1 p-1 px-2 items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-utility-success-500"></div>
              <div className="font-inter text-utility-success-700 text-sm font-medium">
                Open
              </div>
            </div>
          </div>
          <div className="flex text-xl font-medium text-text-2 gap-4 items-center font-generalsans">
            <div className="flex gap-2 justify-center items-center">
              <div>
                <HiOutlineLocationMarker className="text-2xl" />
              </div>
              <div>Delaware, USA</div>
            </div>
            <div className="h-[6px] w-[6px] rounded-full bg-[#D1D1D1]"></div>
            <div className="flex gap-2 justify-center items-center">
              <div>
                <LiaCoinsSolid className="scale-x-[-1] text-2xl" />
              </div>
              <div className='font-generalsans'>$300k-$400k</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobTitle