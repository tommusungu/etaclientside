import Navbar from "../components/Navbar";
// import PageMeta from "../components/PageMeta";
import { useState } from 'react';
// import OtherBlogs from "../components/OtherBlogs";
import BlogDetails from "./BlogDetails";
// import 'react-quill/dist/quill.snow.css';
import PageMeta from "./PageMeta";
import OtherBlogs from "./OtherBlogs";
import Header from "./Header";

const Program = ({ selectedEvent }) => {
  const [isLoading, setIsLoading] = useState(false); // Set default to false since we're not using useEffect

  const blogImage = selectedEvent.image && selectedEvent.image.length > 0 ? selectedEvent.image[0].downloadURL : null;

  return (
    
      <div  className='container p-3 py-4 sm:px-8   w-full'>
      <div className=" w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-full grid gap-6">
        <div data-aos="fade-up" className="w-full flex justify-center h-auto">
            <div className="w-full text-left">
            <div className="mb-2">
            <div  className="py-2 sm:pt-0 w-full">
                <div className="w-full flex justify-between">
                  <h1 className=" text-start text-3xl sm:text-4xl font-semibold text-gray-200">
                  {selectedEvent.title}
                  </h1>
                </div>
               
              </div>
          </div>
        
            </div>
        </div>
          <div data-aos="fade-up" className="w-full flex justify-center ">
            <img
              className="w-full h-[45vh] sm:h-[70vh] rounded-sm object-cover"
              src={blogImage}
              alt="Hero image"
            />
          </div>

          <div data-aos="fade-up" className="w-full flex justify-center h-auto">
            <div className="w-full text-left">
            <div className="mb-2">
            <div  className="py-2 sm:pt-0 w-full">
               
                <div className="py-1 w-full">
                  <p className="text-gray-400 text-lg outline-none leading-7 gap-2">
                  {selectedEvent.description}
                  </p>
                </div>
              </div>
          </div>
          <BlogDetails blogDetails={selectedEvent.details} />
            </div>
        </div>
</div>
</div></div>

     
      {/* <OtherBlogs /> */}
      <div className="w-full flex justify-center items-center ">
        <OtherBlogs/>
      </div>
    </div>
    
  );
}

export default Program;
