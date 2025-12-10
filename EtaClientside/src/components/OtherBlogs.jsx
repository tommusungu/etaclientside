import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Database from '../Database';
import Header from './Header';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const OtherBlogs = ({ AOS }) => {
  const { blogs, loading, error } = Database();
  const [displayCourses, setDisplayCourses] = useState([]);

  useEffect(() => {
    if (blogs.length > 0) {
      const shuffledCourses = shuffleArray(blogs);
      setDisplayCourses(shuffledCourses.slice(0, 3));
    }
  }, [blogs]);

  if (loading) {
    return <div className='w-full h-fit bg-gray-100'></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=" pt-8 w-full">
      <div className="flex justify-center flex-col items-center w-full">
        <Header title={'You May Also Like'} />
        <div className="pt-6 w-full grid sm:grid-cols-3 gap-4">
          {displayCourses.map((course, index) => (
            <Link to={`/updates/${course.id}`} key={course.id} data-aos="fade-in" className="relative hover:bg-[#202020] mt-2">
              <img src={course.image[0]?.downloadURL} className="h-64 w-full object-cover rounded-sm" />
              <div className="flex flex-col gap-2 p-2 transition-all">
                <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-300">{course.title}</h1>
                <p className="text-gray-400 text-base outline-none leading-7 gap-2">
                  {course.description.split(' ').slice(0, 15).join(' ')}
                  {course.description.split(' ').length > 15 && '...'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
