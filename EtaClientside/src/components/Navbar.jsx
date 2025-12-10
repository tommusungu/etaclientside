
import {Link, useLocation} from 'react-router-dom'
import React, { Fragment, useEffect, useRef, useState } from 'react';
import logo from '/ETA-25-logo-2.png'; 
import { Dialog, Transition } from '@headlessui/react';
import {FaBars,FaTimes, FaChevronDown} from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi";
import Database from '../Database';

export default function Navbar() {
  const { blogs } = Database();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const prevScrollY = useRef(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < prevScrollY.current && currentScrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
        prevScrollY.current = currentScrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className={`w-full flex justify-center flex-col z-20 items-center  bg-[#101010] border-b border-[#303030] fix-nav ${isScrolled ? 'scrolled bg-[#101010] fixed-nav shadow-lg z-30' : ''}`}>  
      <div className=' mx-auto flex  w-full max-w-7xl justify-between px-4 py-2 text-sm'>
      <div className='flex items-center gap-10'>
       
        {/* <div className="font-semibold text-yellow-500 text-xl">ETA LOGO</div> */}
       <Link to='/'>
        <img
                  src={logo}
                  className="w-20 h-auto sm:w-28 sm:h-auto object-contain"
                  alt="ETA"
                ></img></Link>
      </div>

      <div className='hidden sm:flex items-center gap-8 transition-all'>
      <NavLink to="/" label="Home" />
              <NavLink to="/about-us" label="About" />
              
            
           

           

            {/* <NavLink to="/competitions" label="Competitions" /> */}
        <div className='relative group px-2 py-3 transition-all'>
                <p className='flex cursor-pointer items-center gap-2 uppercase  font-medium transition-all hover:text-yellow-500 text-gray-200'>
                    <span>Updates</span>
                    <FaChevronDown className='transition-all group-hover:rotate-180'/>
                </p>
               
                <div className='absolute right-0 top-10 hidden min-w-[250px] flex-col gap-1 rounded-sm bg-[#202020] pb-1 shadow-md  transition-all group-hover:flex z-20'>
                        {blogs.map((blog) => (
                <Link key={blog.id} to={`/updates/${blog.id}`} className='flex cursor-pointer items-center py-2 pl-6 pr-8 hover:bg-[#303030] text-gray-100'>
                {blog.title}
            </Link>
            ))}
                </div>
            </div>

            {/* <div className='relative uppercase group px-2 py-3 transition-all'>
                <p className='flex cursor-pointer items-center gap-2 uppercase  font-medium transition-all hover:text-yellow-500 text-gray-200'>
                    <span>Explore More</span>
                    <FaChevronDown className='transition-all group-hover:rotate-180'/>
                </p>
               
                <div className='absolute right-0 top-10 hidden min-w-[250px] flex-col gap-1 rounded-sm bg-[#202020] pb-1 shadow-md  transition-all group-hover:flex z-20'>
                
               
            <Link  to='/our-gallery' className='flex cursor-pointer items-center py-2 pl-6 pr-8 hover:bg-[#303030] text-gray-100'>
                Gallery
            </Link>
            <Link  to='/kiongozi-bora' className='flex cursor-pointer items-center py-2 pl-6 pr-8 hover:bg-[#303030] text-gray-100'>
                Kiongozi Bora
            </Link>
                </div>
            </div> */}


        
<NavLink to="/our-gallery" label="Our Gallery" />
<NavLink to="/kiongozi-bora" label="Kiongozi Bora" />
{/* <NavLink to="/nominations" label="Nominations" /> */}
<NavLink to="/contact" label="Contact" />

        {/* <Link to='/contact' className='uppercase h-fit flex gap-2 items-center font-medium text-base rounded-sm p-2.5 px-5 text-gray-50 transform transition-all bg-yellow-500 hover:shadow-3xl hover:bg-yellow-500'>
           <span>Contact Us</span>  <FiArrowUpRight className='text-lg' />
        </Link> */}
         <Link to='/vote' className='uppercase h-fit flex gap-2 items-center font-medium text-base rounded-sm p-2.5 px-5 text-gray-50 transform transition-all bg-yellow-500 hover:shadow-3xl hover:bg-yellow-500'>
           <span>Vote Now</span>  <FiArrowUpRight className='text-lg' />
        </Link>
      </div>
      <div className='flex sm:hidden items-center gap-8'>
        {/* small devices code */}
        <button onClick={() => setMobileMenuOpen(true)} className=' h-fit text-gray-300 font-medium text-2xl transition-all '>
            <FaBars/>
        </button>
        
      </div>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50"
              onClose={() => setMobileMenuOpen(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-[#101010] shadow-xl">
                          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-center justify-between">
                              <Link
                                to="/about-us"
                                className="-m-1.5 p-1.5"
                              ></Link>
                              <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="sr-only">Close menu</span>
                                <FaTimes className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                            <div className="mt-6 flow-root">
                              <div className="-my-6 ">
                                <div className="space-y-2 py-6">
                                  <Link
                                    to="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Home
                                  </Link>
                                  <Link
                                    to="/about-us"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    About us
                                  </Link>
                            
                                  <Link
                                    to="/our-gallery"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Gallery
                                  </Link>


           

            {/* <Link
                                    to="/competitions"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Competitions
                                  </Link> */}
                                  <Link
                                    to="/kiongozi-bora"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Kiongozi Bora
                                  </Link>
                                  {/* <Link
                                    to="/nominations"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Nominations
                                  </Link> */}
                                  <Link
                                    to="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Contact
                                  </Link>
                                  <div className='group py-2 transition-all'>
                                      <p className='flex uppercase cursor-pointer items-center justify-between text-gray-200  text-base font-semibold transition-all '>
                                          <span>Updates</span>
                                          <FaChevronDown className='transition-all group-hover:rotate-180'/>
                                      </p>
                                      <div className='  hidden min-w-[180px] flex-col gap-1 rounded-lg py-2 z-50  transition-all group-hover:flex'>
                                                  {blogs.map((blog) => (
                                          <Link key={blog.id} onClick={() => setMobileMenuOpen(false)} to={`/updates/${blog.id}`} className='flex cursor-pointer items-center py-2 pl-6 pr-8 text-gray-200 hover:bg-[#202020] '>
                                              {blog.title}
                                          </Link>
                                      ))}
                                                  </div>
                                  </div>
                                  
                                 
                                  {/* <Link
                                    to="/buy-tickets"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-md px-3 py-2 uppercase text-base font-semibold leading-7 text-gray-200 hover:bg-[#202020]"
                                  >
                                    Buy Tickets
                                  </Link> */}


                                </div>
                                <div className="py-6">
                                  <Link
                                    to="/vote"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-sm px-3 py-2.5 uppercase text-center font-bold leading-7 bg-yellow-500 hover:bg-yellow-500 p-3  text-gray-50"
                                  >
                                    Vote Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
    </div>
    </div>
  );
function NavLink({ to, label }) {
  const isActive = location.pathname === to;
  return (
   
    <Link to={to} className=' px-2 py-3 transition-all'>
                <p className={`flex cursor-pointer uppercase items-center gap-2  font-medium transition-all hover:text-yellow-500 text-gray-200 ${ isActive ? ' text-yellow-500 font-semibold' : ''}`}>
                    <span>{label}</span>
                   
                </p>
              
            </Link>
  );
}
}