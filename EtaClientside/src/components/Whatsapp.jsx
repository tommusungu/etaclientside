import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './Whatsapp.css'
const Whatsapp = () => {
  const phoneNumber = '254724547183';
  return (
    <div className='whatsapp'>
        
<div className="floating_btn ">
    <a className="flex gap-2 items-center "  href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello`} target="_blank" rel="noopener noreferrer" >
    <p className=" w-fit p-2 px-3 bg-[#242424] hover:bg-[#292929]  text-gray-300 font-medium text-sm text-nowrap rounded-full shadow-xl ">Let's chat</p>
     
      <div className="contact_icon ">
        
        <FaWhatsapp className="fa fa-whatsapp my-float"/>
       
      </div>
      
    </a>
    
  </div>
    </div>
  )
}

export default Whatsapp