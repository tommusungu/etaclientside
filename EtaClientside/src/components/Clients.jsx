import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUser } from 'react-icons/fa';
import Header from './Header';
import Database from '../Database';

const Clients = () => {
  const { clients, loading, error } = Database();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4, // Display 3 testimonials at a time
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  const sliderRef = React.createRef();

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className=" container py-3 px-0 sm:px-12 relative">
     
            <div className="flex justify-center flex-col items-center w-full">
                <Header title={'Previous Sponsors'} />
                </div>
      <div className='w-full relative'>

      
      <Slider ref={sliderRef} {...settings}>
        {clients.map((client, index) => (
          <div key={index} className=" p-3 flex flex-col justify-between h-full relative">
            <div className='p-2'>
              <div className="relative flex justify-center items-center">
                <div className="w-auto h-24 lg:w-36 lg:h-36 flex justify-center items-center  ">
                <img
                className='w-full h-full bg-cover rounded-full'
                src={client.image[0].downloadURL}
                alt={client.title}
              />
                 
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className='absolute top-10 w-full text-4xl text-gray-100 flex justify-between'>
        <BiChevronLeft className="bg-gray-900 hover:bg-gray-800 cursor-pointer w-8 h-8 rounded-full m-1" onClick={handlePrevClick} />
        <BiChevronRight className="bg-gray-900 hover:bg-gray-800 cursor-pointer w-8 h-8 rounded-full m-1" onClick={handleNextClick} />
      </div> */}
      </div>
    </div>
  );
};

export default Clients;