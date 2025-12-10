import React from 'react'

const Header2 = ({title, subtitle}) => {
  return (
    <div className='py-4  w-full '>
    <div className='flex  justify-center items-center gap-2 w-full overflow-hidden'>
   
    <h1 className="text-center  uppercase text-3xl sm:5xl  font-extrabold  text-yellow-500">
    {title}</h1>
    
    </div>

    <p className="text-gray-300 text-center text-xl sm:text-2xl  outline-none leading-9 gap-2">
    {subtitle}
</p>
   
    
    </div>
  )
}

export default Header2