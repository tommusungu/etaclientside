import React from 'react'

const Header = ({title,}) => {
  return (
    <div className='py-4 flex flex-col gap-2'>
    <div className='flex flex-col justify-center items-center gap-x-2'>
    {/* <div className='w-3 h-3 bg-black rounded-full' /> */}
      <h1 className="text-center   text-3xl sm:5xl  font-extrabold  text-gray-300">
    {title}</h1>
    <div className='h-[3px] w-2/3 bg-yellow-500'/>
    </div>

   
   
    
    </div>
  )
}

export default Header