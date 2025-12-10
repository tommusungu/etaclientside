import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CiMail,CiPhone } from "react-icons/ci";

const TopBar = () => {
   const email = 'info@etaawardske.co.ke';
   const phoneNumber = '254724547183';
   const phoneNumber2 = '254719775268';
   return (
    <div className="w-full bg-[#000000] flex justify-center">
      <div className='container p-2  sm:px-4 relative w-full  flex justify-between text-md text-gray-100'>
        <div>
          <ul className='flex gap-4 items-center'>
            <li className="flex justify-start items-center gap-2 ">
              <div className=' flex justify-start items-center gap-2'>
               
              <CiPhone />
                <p>Tel:</p>
              </div>
              <a href={`tel:${phoneNumber}`} target='_blank'>+{phoneNumber}</a>
              <li className='w-[1px] h-5 bg-gray-400'/>
              <a href={`tel:${phoneNumber2}`} target='_blank'>+{phoneNumber2}</a>
            </li>
            <li className='w-[1px] h-5 bg-gray-400'/>

            
            <li className="flex justify-start items-center gap-2 ">
              <div className=' flex justify-start items-center gap-2'>
               
              <CiMail />
                <p>Email:</p>
              </div>
              <a href={`mailto:${email}`} target='_blank'>{email}</a>

            </li>
          </ul>
        </div>
        <div className='flex items-center'>
        {/* <ul className='flex justify-between items-center gap-4'>
    <li className='w-[1px] h-5 bg-gray-400'/>
    <div className=' flex justify-start items-center gap-2'>
               
              
                <p>Our Socials:</p>
              </div>
              
              <a  href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello`} target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
              <a href="https://web.facebook.com/profile.php?id=100069440648824" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
              <a href="https://www.tiktok.com/@eta_awardske?_t=8nASI8lN1Hi&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
              <a href="https://www.instagram.com/eta_awards_kenya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
  </ul> */}

        </div>
      </div>
    </div>
  )
}

export default TopBar