import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs, limit, orderBy, startAfter } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import Header from './Header';
import { FaChevronRight, FaPlus, FaChevronLeft } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Album = ({ AOS }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Cache for storing fetched data by year and page
  const [cache, setCache] = useState({});
  
  const PRODUCTS_PER_PAGE = 8;

  // Fetch available years on component mount
  useEffect(() => {
    fetchAvailableYears();
  }, []);

  // Fetch available years from Firestore
  const fetchAvailableYears = async () => {
    try {
      setLoading(true);
      const yearsQuery = query(
        collection(firestore, 'TP_Albums'),
        where('availability', '==', true)
      );
      
      const snapshot = await getDocs(yearsQuery);
      const years = [...new Set(
        snapshot.docs
          .map(doc => doc.data().year)
          .filter(year => year !== undefined && year !== null)
      )].sort((a, b) => b - a); // Sort descending (newest first)
      
      setAvailableYears(years);
      
      // Set "All" as default
      setSelectedYear('All');
      await fetchProductsForYear('All', 0);
      
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching years:', err);
    }
  };

  // Fetch products for a specific year and page
  const fetchProductsForYear = async (year, page = 0, useCache = true) => {
    const cacheKey = `${year}_${page}`;
    
    // Check cache first if useCache is true
    if (useCache && cache[cacheKey]) {
      setProducts(cache[cacheKey].products);
      setHasNextPage(cache[cacheKey].hasNextPage);
      setCurrentPage(page);
      return;
    }

    try {
      setLoading(true);
      
      let productsQuery;
      
      if (year === 'All') {
        productsQuery = query(
          collection(firestore, 'TP_Albums'),
          where('availability', '==', true),
          orderBy('__name__'),
          limit(PRODUCTS_PER_PAGE + 1)
        );
      } else {
        productsQuery = query(
          collection(firestore, 'TP_Albums'),
          where('availability', '==', true),
          where('year', '==', year),
          orderBy('__name__'),
          limit(PRODUCTS_PER_PAGE + 1)
        );
      }

      // If it's not the first page, we need to start after the last document from previous page
      if (page > 0) {
        const prevPageCacheKey = `${year}_${page - 1}`;
        if (cache[prevPageCacheKey] && cache[prevPageCacheKey].lastDoc) {
          if (year === 'All') {
            productsQuery = query(
              collection(firestore, 'TP_Albums'),
              where('availability', '==', true),
              orderBy('__name__'),
              startAfter(cache[prevPageCacheKey].lastDoc),
              limit(PRODUCTS_PER_PAGE + 1)
            );
          } else {
            productsQuery = query(
              collection(firestore, 'TP_Albums'),
              where('availability', '==', true),
              where('year', '==', year),
              orderBy('__name__'),
              startAfter(cache[prevPageCacheKey].lastDoc),
              limit(PRODUCTS_PER_PAGE + 1)
            );
          }
        }
      }

      const snapshot = await getDocs(productsQuery);
      const docs = snapshot.docs;
      
      // Check if there's a next page
      const hasNext = docs.length > PRODUCTS_PER_PAGE;
      const productsData = docs
        .slice(0, PRODUCTS_PER_PAGE)
        .map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Cache the results
      const newCacheEntry = {
        products: productsData,
        hasNextPage: hasNext,
        lastDoc: docs.length > 0 ? docs[Math.min(docs.length - 1, PRODUCTS_PER_PAGE - 1)] : null
      };
      
      setCache(prev => ({
        ...prev,
        [cacheKey]: newCacheEntry
      }));
      
      setProducts(productsData);
      setHasNextPage(hasNext);
      setCurrentPage(page);
      setLoading(false);
      
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching products:', err);
    }
  };

  // Handle year selection
  const handleYearChange = async (year) => {
    if (year !== selectedYear) {
      setSelectedYear(year);
      setCurrentPage(0);
      await fetchProductsForYear(year, 0);
    }
  };

  // Handle pagination
  const handleNextPage = async () => {
    const nextPage = currentPage + 1;
    await fetchProductsForYear(selectedYear, nextPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      fetchProductsForYear(selectedYear, prevPage, true); // Use cache for previous pages
    }
  };

  if (loading && products.length === 0) {
    return <div className='w-full h-96 bg-gray-100 flex items-center justify-center'>
      <div className="text-gray-600">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="w-full h-96 flex items-center justify-center">
      <div className="text-red-600">Error: {error.message}</div>
    </div>;
  }

  return (
    <div className="container p-3 sm:px-8 w-full">
      <div className="flex justify-center flex-col items-center w-full">
        {/* Year Filter Buttons */}
        <div className="pt-6 w-full flex flex-wrap justify-center gap-3 mb-6">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              disabled={loading}
              className={`px-4 py-2 rounded-sm transition-colors ${
                selectedYear === year 
                  ? 'bg-gray-900 text-gray-100 border border-gray-700' 
                  : 'bg-gray-300 hover:bg-gray-400'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
          {products.map((product, index) => (
            <div key={product.id} data-aos="fade-in" className="relative gallery-item">
              <img
                src={product.image[0]?.downloadURL}
                alt={`Product ${product.id}`}
                className="h-48 w-full object-cover rounded-sm cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsOpen(true);
                }}
              />
              <div 
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsOpen(true);
                }}
                className="overlay cursor-pointer"
              >
                <FaPlus className="icon" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {(currentPage > 0 || hasNextPage) && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0 || loading}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm ${
                currentPage === 0 || loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <FaChevronLeft /> Previous
            </button>
            
            <span className="text-gray-600">
              Page {currentPage + 1}
            </span>
            
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage || loading}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm ${
                !hasNextPage || loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Next <FaChevronRight />
            </button>
          </div>
        )}

        {/* Loading indicator for pagination */}
        {loading && products.length > 0 && (
          <div className="text-gray-600 mb-4">Loading more products...</div>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          slides={products.map(product => ({ 
            src: product.image[0]?.downloadURL,
            alt: `Product ${product.id}`
          }))}
          open={isOpen}
          index={currentImageIndex}
          close={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Album;