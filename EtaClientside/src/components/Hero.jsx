import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const transitionDuration = 10000; // Duration in milliseconds for each image

// Step 1: Create Dummy Data
const dummyPrograms = [
  
  // {
  //   title: "ETA Awards Ke",
  //   description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
  //   image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2F9jrHj89tnzeDVX0GcceM%2FIMG-20250603-WA0012.jpg?alt=media&token=19f23eb4-a503-4ff8-af13-f8d6b80f3b1a" }],
  // },
 
  {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2FLJacO2eUcgLUhqsWgUWh%2FIMG-20250603-WA0020.jpg?alt=media&token=910efc87-40b2-4da4-a71c-f60eaaca27a5" }],
  },
  {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2FOInFgftDX5jk1PIXIxOz%2FIMG-20250603-WA0017.jpg?alt=media&token=2034632b-4629-4c8c-b57b-428b9245fe82" }],
  },
  {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2F65MJDCL1M3zu0JRz5ANS%2FIMG-20250603-WA0016.jpg?alt=media&token=29526282-1bdb-483d-a6ef-42d4d9c2dd54" }],
  },
  {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2F9jrHj89tnzeDVX0GcceM%2FIMG-20250603-WA0012.jpg?alt=media&token=19f23eb4-a503-4ff8-af13-f8d6b80f3b1a" }],
  },
  {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2FXeSp9qJYUKfVLjVJRGSg%2FIMG-20250603-WA0019.jpg?alt=media&token=6a7e8237-31f9-4caa-b7cb-10594bb4dad7" }],
  },
   {
    title: "ETA Awards Ke",
    description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
    image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaawards-58ef1.appspot.com/o/gallery%2FJ157dadWD2kgWiY6k71k%2FIMG-20250603-WA0021.jpg?alt=media&token=9b7508c2-1cfb-4dda-9847-6834a5a43c01" }],
  },
  // {
  //   title: "ETA Awards Ke",
  //   description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
  //   image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaweb-49958.appspot.com/o/gallery%2FikYyvZ2Tpjr8WR0wHU1r%2F12.jpg?alt=media&token=b17534f3-49e7-4e4a-906f-5a4fdaed9b20" }],
  // },
  // {
  //   title: "ETA Awards Ke",
  //   description: "We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.",
  //   image: [{ downloadURL: "https://firebasestorage.googleapis.com/v0/b/etaweb-49958.appspot.com/o/gallery%2Fq1vD1dxwzhn2OLbX0x2l%2Fabout4.jpeg?alt=media&token=5e2beb29-edc3-4dd7-a960-5a7c62fd79e6" }],
  // },

];

export default function Hero({ AOS }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);
  
  // Step 2: Replace Database programs with dummyPrograms
  const programs = dummyPrograms;

  useEffect(() => {
    if (programs.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === programs.length - 1 ? 0 : prevIndex + 1
        );
      }, transitionDuration);

      return () => clearInterval(intervalId);
    }
  }, [programs]);

  useEffect(() => {
    setAnimateContent(true);
    const timeoutId = setTimeout(() => setAnimateContent(false), 1000);
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center h-screen'>
        <div className='w-full relative'>
          {programs.map((product, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                className='w-full h-full object-cover'
                src={product.image[0].downloadURL}
                alt={`Product image ${index + 1}`}
              />
              <div className='absolute top-0 left-0 z-10 w-full h-full flex justify-center items-start pt-24'>
                <div className={`w-full container sm:px-8 flex flex-col gap-3 justify-center items-start px-4 `}>
                  <div className={`w-full flex flex-col gap-2 justify-center items-center ${animateContent ? 'slide-in' : ''}`}>
                    <h1
                      data-aos='fade-up'
                      className='text-5xl font-bold tracking-tight text-center text-gray-300 sm:text-6xl sm:text-[80px] w-5/6 sm:w-3/4'
                    >
                      {product.title}
                    </h1>
                    <h1
                      data-aos='fade-up'
                      className='text-base tracking-tight text-gray-300 text-center py-3 sm:px-0 sm:text-lg w-5/6 sm:w-3/4'
                    >
                      {product.description.split(' ').slice(0, 45).join(' ')}
                      {product.description.split(' ').length > 45 && '...'}
                    </h1>
                    <div className='flex justify-start gap-2'>
                      {/* <Link
                        to={`/nominations`}
                        className='p-3 bg-[#040404] hover:bg-[#141414] text-gray-100 my-3 rounded-sm px-6 text-sm sm:text-base flex justify-center items-center gap-2'
                      >
                        Nominations<FaChevronRight />
                      </Link> */}

                       <Link
                        to={`/kiongozi-bora`}
                        className='p-3 bg-[#040404] hover:bg-[#141414] text-gray-100 my-3 rounded-sm px-6 text-sm sm:text-base flex justify-center items-center gap-2'
                      >
                        Kiongozi Bora<FaChevronRight />
                      </Link>
                      <Link

                                              to={`/vote`}

                        className='p-3 bg-gray-100 hover:bg-gray-200 text-gray-900 my-3 rounded-sm px-6 text-sm sm:text-base flex justify-center items-center gap-2'
                      >
                        Vote Here<FaChevronRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute inset-0 bg-[#040404] opacity-60' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
