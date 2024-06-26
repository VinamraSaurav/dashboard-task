import React from 'react'

const FieldDesc = ({title,desc}) => {
  return (
    <div>
        <div className='flex flex-col gap-2 justify-center font-generalsans w-full'>
                <div className='text-text-1 text-sm font-medium'>{title}</div>
                <div className='text-text-5 text-base font-[600] '>{desc}</div>
        </div>
    </div>
  )
}

export default FieldDesc