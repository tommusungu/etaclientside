// import React, { useState, useEffect } from 'react';
// import Database from '../Database';
// import { FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const transitionDuration = 10000; // Duration in milliseconds for each image

// export default function Hero({ AOS }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [animateContent, setAnimateContent] = useState(false);
//   const { programs, loading, error } = Database();

//   useEffect(() => {
//     if (programs.length > 0) {
//       const intervalId = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === programs.length - 1 ? 0 : prevIndex + 1
//         );
//       }, transitionDuration);

//       return () => clearInterval(intervalId);
//     }
//   }, [programs]);

//   useEffect(() => {
//     setAnimateContent(true);
//     const timeoutId = setTimeout(() => setAnimateContent(false), 1000);
//     return () => clearTimeout(timeoutId);
//   }, [currentImageIndex]);

 

//   if (loading) {
//     return (
//       <div className='h-screen bg-[#101010] w-full flex justify-center items-center'>
//         <div className='custom-loader'></div>
//       </div>
//     ); // Placeholder for loading state
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>; // Placeholder for error state
//   }

//   return (
//     <div className='w-full'>
//       <div className='w-full flex justify-center h-screen'>
//         <div className='w-full relative'>
//           {programs.map((product, index) => (
//             <div
//               key={index}
//               className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-opacity duration-1000 ${
//                 index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img
//                 className='w-full h-full object-cover'
//                 src={product.image[0].downloadURL}
//                 alt={`Product image ${index + 1}`}
//               />
//               <div className='absolute top-0 left-0 z-10 w-full h-full flex justify-center items-start pt-24'>
//                 <div className={`w-full container sm:px-8  flex flex-col gap-3 justify-center items-start px-4 `}>
                  
//                   <div className={`w-full flex flex-col gap-2 justify-center items-center ${animateContent ? 'slide-in' : ''}`}>
//                   <h1
//                     data-aos='fade-up'
//                     className='text-5xl font-bold tracking-tight text-center text-gray-300 sm:text-6xl sm:text-[80px] w-5/6 sm:w-3/4'
//                   >
//                     {product.title}
//                   </h1>
//                   <h1
//                     data-aos='fade-up'
//                     className='text-base tracking-tight text-gray-300 text-center py-3 sm:px-0 sm:text-lg w-5/6 sm:w-3/4'
//                   >
//                     {product.description.split(' ').slice(0, 45).join(' ')}
//                     {product.description.split(' ').length > 45 && '...'}
//                   </h1>
//                   <div className='flex justify-start gap-2'>
//                   <Link
//                     to={`/about-us`}
//                     className='p-3 bg-[#040404] hover:bg-[#141414] text-gray-100  my-3 rounded-sm px-6 text-sm sm:text-base flex justify-center items-center gap-2'
//                   >
//                     Read More<FaChevronRight />
//                   </Link>
//                   <a
//                      href="https://expo.dev/artifacts/eas/eEFDCB58bd3pv7CWEHfq1c.apk"
//                      download
//                     className='p-3 bg-gray-100 hover:bg-gray-200 text-gray-900  my-3 rounded-sm px-6 text-sm sm:text-base flex justify-center items-center gap-2'
//                   >
//                     Download App<FaDownload />
//                   </a>
//                   </div>
//                   </div>
                  
                  
                  
//                 </div>
//               </div>
//               <div className='absolute inset-0 bg-[#040404] opacity-60' />
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </div>
//   );
// }
