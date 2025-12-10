import React, { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';
import { FaPlay, FaTimes, FaChevronLeft, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import './Video.css';
// import Image_1 from '../assets/bfde7b44-fa47-4f18-a60d-d9d5b97d590a.jpeg';
// import Video_1 from './../assets/K24_Interview_Video.mp4';
// import Image_2 from '../assets/rev_Lucy_natasha.jpg';
// import Video_2 from './../assets/Rev_Lucy_Natasha.mp4';

import Image_1 from '/eta-video-thumbnail.jpg';
import Video_1 from '/eta-video.mp4';

// Sample video data
const videos = [
   {
    // title: 'Rev Lucy Natasha Carmel - Senior Pastor ECC, Nairobi',
    // description:
    //   'Rev Lucy Natasha invites everyone to the ETA Awards 2025 on the 5th of September, in Machakos County. ',
    videoSrc: Video_1,
    thumbnail: Image_1,
    title:'',
    description:''
  },
  // {
  //   title: 'Edward W. Ndari - CEO of ETA Awards Kenya',
  //   description:
  //     'Insightful interview: Edward W. Ndari discusses the vision and impact of the ETA Awards on Kenyan entertainment and beyond. The conversation highlights how the awards are elevating national and international recognition for Kenyan talent on K24.',
  //   videoSrc: Video_1,
  //   thumbnail: Image_1,
  // },
  // {
  //   title: 'Rev Lucy Natasha Carmel - Senior Pastor ECC, Nairobi',
  //   description:
  //     'Rev Lucy Natasha invites everyone to the ETA Awards 2024 on Saturday, 7th September, in Machakos County. ',
  //   videoSrc: Video_2,
  //   thumbnail: Image_2,
  // },
  // Add more video objects as needed
];

const VideoComponent = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // Tracks which video is open

  const openVideo = (index) => {
    setActiveVideoIndex(index);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const handlePrevious = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen relative text-center overflow-hidden">
      {!isVideoOpen && (
        <div
          className="relative w-full h-full video-thumbnail"
          style={{
            backgroundImage: `url(${videos[activeVideoIndex].thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-60 text-gray-100 p-4">
            <h3 className="text-4xl font-bold mb-2">{videos[activeVideoIndex].title}</h3>
            <p className="text-lg max-w-xl mb-4">{videos[activeVideoIndex].description}</p>

            <button onClick={() => openVideo(activeVideoIndex)} className="video">
              <div className="floating_btn">
                <div className="flex items-center justify-center">
                  <div className="contact_icon flex justify-center items-center text-gray-600 font-semibold gap-1 px-4 py-2">
                    <p className="">Play</p>
                    <p className="">Video</p>
                    <FaPlay className="fa fa-video my-float ml-2" />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Buttons */}
          <button onClick={handlePrevious} className="absolute top-1/2 left-4 text-white bg-[#000000de] text-lg rounded-full p-2">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-4 md:right-8 text-white bg-[#000000de] text-lg rounded-full p-2">
            <FaChevronRight />
          </button>
        </div>
      )}

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full h-auto">
            <video className="w-full h-auto" controls autoPlay>
              <source src={videos[activeVideoIndex].videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 z-50 bg-yellow-500 text-gray-100 p-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
