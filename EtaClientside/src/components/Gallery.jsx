import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Database from '../Database';
import Header from './Header';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Gallery = ({ AOS }) => {
  const { products, loading, error } = Database();
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!loading && !error) {
      const shuffledProducts = shuffleArray(products);
      const selectedProducts = shuffledProducts.slice(0, 4); // Limiting to a maximum of 4 randomly selected products
      setLimitedProducts(selectedProducts);
    }
  }, [loading, error, products]);

  if (loading) {
    return <div className='w-full h-fit bg-gray-100'></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container p-3 sm:px-8 w-full">
      <div className="flex justify-center flex-col items-center w-full">
        <Header title={'Our Gallery'}  />
        <div className="pt-6 w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {limitedProducts.map((product, index) => (
            <div key={product.id} data-aos="fade-in" className="relative  gallery-item">
              <img
                src={product.image[0]?.downloadURL}
                className="h-48 w-full object-cover rounded-sm cursor-pointer"
                
              />
              {/* {product.year && (
  <div className='absolute bg-[#141414] text-gray-100 top-0 left-0 rounded-sm px-4 py-2 flex items-center justify-center'>
    {product.year}
  </div>
)} */}

              <div
              onClick={() => {
                  setCurrentImageIndex(index);
                  setIsOpen(true);
                }}
               className="overlay cursor-pointer">
                <FaPlus className="icon" />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-end'>
        <Link
          to="/our-gallery"
          className='p-3  text-yellow-500 my-4 font-semibold hover:text-yellow-500 px-6 text-lg w-fit flex justify-center items-center gap-2'
        >
          Explore More<FaChevronRight />
        </Link>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          slides={limitedProducts.map(product => ({ src: product.image[0]?.downloadURL }))}
          open={isOpen}
          index={currentImageIndex}
          close={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Gallery;
