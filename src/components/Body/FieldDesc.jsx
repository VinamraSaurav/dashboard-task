import React from 'react'

const FieldDesc = ({title,desc}) => {
  return (
    <div>
        <div className='flex flex-col gap-2 justify-center font-generalsans'>
                <div className='text-text-1 text-base font-medium'>{title}</div>
                <div className='text-text-5 text-lg font-[600] '>{desc}</div>
        </div>
    </div>
  )
}

export default FieldDesc