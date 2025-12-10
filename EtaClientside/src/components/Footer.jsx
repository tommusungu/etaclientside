import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'; // Relative path to your logo image
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';


import Database from '../Database';
const Footer = () => {
  const email = 'info@etaawardske.co.ke';
  const phoneNumber = '254724547183';
  const phoneNumber2 = '254719775268';
  return (
    <div className='w-full flex justify-center flex-col items-center'>
    
    <div className='w-full bg-[#040404]  pb-8   flex justify-center'>
      <div  className='container p-3 pt-12 sm:px-8   w-full'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 text-start gap-2'>
          <div className='mt-3 sm:mt-0'>
          {/* <img
                  src={logo}
                  className="w-32  object-contain"
                  alt="Inspire hub"
                ></img> */}
                <div className="font-semibold text-gray-300 pb-4 text-xl">ETA Awards KE</div>
            <div className="mt-2 text-gray-300 text-base font-medium leading-7 outline-none gap-2">
            <div className="flex flex-col mt-2 text-gray-300 text-base font-medium leading-7 outline-none gap-2">
                <p>We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.</p>
            </div>
              
            </div>
          </div>

          <div className='mt-3 sm:mt-0'>
            <h2 className="mb-2 text-lg sm:text-xl font-semibold text-gray-300 pb-4">Useful Links</h2>
            <div className="flex flex-col mt-2 text-gray-300 text-base font-medium leading-7 outline-none gap-2">
              <Link className='navbar-b w-fit' to="/">Home</Link>
              <Link className='navbar-b w-fit' to="/about-us">About us</Link>
              <Link className='navbar-b w-fit' to="/contact">Contact us</Link>
              <Link className='navbar-b w-fit' to="/our-gallery">Our Gallery</Link>
              <Link className='navbar-b w-fit' to="/kiongozi-bora">Kiongozi Bora</Link>
              {/* <Link className='navbar-b w-fit' to="/nominations">Nominations</Link> */}
              <Link className='navbar-b w-fit' to="/vote">Vote</Link>
              <Link className='navbar-b w-fit' to="/policy">Our Policy</Link>
              <Link className='navbar-b w-fit' to="/generate-poster">Generate E-Poster</Link>
            </div>
          </div>

        

          <div className='mt-3 sm:mt-0'>
            <h2 className="mb-2 text-lg sm:text-xl font-semibold text-gray-300 pb-4">Contact</h2>
            <div className="mt-2 text-gray-300 text-base font-medium leading-7 outline-none gap-2">
              <p>Machakos, Kenya</p>
              <div className='flex gap-2'>
                <p className='font-semibold'>Tel</p>
                <div className='flex flex-col'>
                  <a href={`tel:${phoneNumber}`} target='_blank'>+{phoneNumber}</a>
                </div>
              </div>
              <div className='flex gap-2'>
                <p className='font-semibold'>Tel 2</p>
                <div className='flex flex-col'>
                
                <a href={`tel:${phoneNumber2}`} target='_blank'>+{phoneNumber2}</a>
                </div>

              </div>
              <div className='flex gap-2'>
                <p className='font-semibold'>Email</p>
                
                <a href={`mailto:${email}`} target='_blank'>{email}</a>
                
              </div>
              
              <div className='flex gap-4 pt-2'>
                
                
                {/* <a href='' className='text-xl' target='_blank'><FaTwitter/></a>
                <a href='' className='text-xl' target='_blank'><FaFacebook/></a>
                <a href='' className='text-xl' target='_blank'><FaInstagram/></a>
                <a href='' className='text-xl' target='_blank'><FaLinkedin/></a> */}
                
            </div>
            </div>
          </div>
          <div className='mt-3 sm:mt-0'>
            <h2 className="mb-2 text-lg sm:text-xl font-semibold text-gray-300 pb-4">Socials</h2>
            <div className='flex gap-4 items-center text-gray-300 '>
                <p className='font-semibold'>Follow us</p>
                <a  href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello`} target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
                {/* <a href="https://web.facebook.com/profile.php?id=100069440648824" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
              <a href="https://www.tiktok.com/@eta_awardske?_t=8nASI8lN1Hi&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
              <a href="https://www.instagram.com/eta_awards_kenya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a> */}
  
              </div>
          </div>
        </div>

<div className='h-[2px] w-full bg-gray-400 my-3 mt-10'/>
      <div className='flex justify-center flex-col text-center text-sm text-gray-300'>
      <p>
      ©ETA Awards KE. All Rights Reserved
      </p>
      <a href='https://inspirehub.co.ke/'>
        Created By Inspire Hub Limited
      </a>
      </div>
      
      </div>
      
    </div>
    </div>
  )
}

export default Footer