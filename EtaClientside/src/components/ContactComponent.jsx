import React from 'react'
import {FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';

const ContactComponent = ({AOS}) => {
    const email = 'info@etaawardske.co.ke';
  const phoneNumber = '254724547183';
  const phoneNumber2 = '254719775268';
  return (
   <div className="flex flex-col  gap-4 mt-3">
     <div className="w-full flex justify-between gap-2 items-center h-auto">
    <div className='text-gray-100 bg-black border border-gray-700 w-16 h-14 rounded-sm grid place-content-center'>
        <FaMapMarkerAlt className='text-lg'/>
    </div>
    <div className="w-full  text-left">
<div className="sm:pt-0 w-full">
<div className="w-full flex justify-between">
<h1 className="text-center text-base sm:text-lg font-semibold text-gray-400">
Location:</h1>
</div>
<div className="py-1 w-full">
<p className="text-gray-300 text-base font-medium leading-8 outline-none gap-2">

Machakos, Kenya</p>
</div>
</div>
</div>

</div>

<div className="w-full flex justify-between gap-2 items-center h-auto">
    <a href={`tel:${phoneNumber}`} target='_blank' className='text-gray-100 bg-black border border-gray-700 w-16 h-14 rounded-sm grid place-content-center'>
        <FaPhoneAlt className='text-lg'/>
    </a>
    <div className="w-full  text-left">
<div className="sm:pt-0 w-full">
<div className="w-full flex justify-between">
<h1 className="text-center text-base sm:text-lg font-semibold text-gray-400">
Phone:</h1>
</div>
<div className="py-1 w-full flex flex-col">
<a className="text-gray-300 text-base font-medium leading-8 outline-none gap-2" href={`tel:${phoneNumber}`} target='_blank'>+{phoneNumber}</a>

<a className="text-gray-300 text-base font-medium leading-8 outline-none gap-2" href={`tel:${phoneNumber2}`} target='_blank'>+{phoneNumber2}</a>

</div>
</div>
</div>

</div>

<div className="w-full flex justify-between gap-2 items-center h-auto">
    <a href={`mailto:${email}`} target='_blank' className='text-gray-100 bg-black border border-gray-700 w-16 h-14 rounded-sm grid place-content-center'>
    <HiOutlineMail className='text-lg'/>
    </a>
    <div className="w-full  text-left">
<div className="sm:pt-0 w-full">
<div className="w-full flex justify-between">
<h1 className="text-center text-base sm:text-lg font-semibold text-gray-400">
Email:</h1>
</div>
<div className="py-1 w-full">


<a className="text-gray-300 text-base font-medium leading-8 outline-none gap-2" href={`mailto:${email}`} target='_blank'>{email}</a>
</div>
</div>
</div>

</div>
   </div>
  )
}

export default ContactComponent