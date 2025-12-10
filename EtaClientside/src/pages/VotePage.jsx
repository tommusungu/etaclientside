import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header2 from '../components/Header2';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import { FaSearch } from 'react-icons/fa';

const VotePage = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://portal.etaawardske.co.ke/api/get-categories');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (name,code) => {
    navigate(`/vote/${name}/${code}`);
  };

  return (
    <div className="bg-[#101010]">
      <Helmet>
        <title>Nominations - ETA Awards KE</title>
        <meta name="description" content="Voting for your favorite nominees in the ETA Awards KE is simple and straightforward. Each vote costs KSh 10, and you can cast as many votes as you like for different categories. Your participation not only supports your favorite artists and leaders but also contributes to recognizing excellence across various fields in Kenya. Download our app to get started with the voting process." />
        <meta name="keywords" content="ETA Awards Nominations,Voting, Vote, Nominate for ETA Awards, Entertainment Awards, Leadership Awards, Business Awards, Community Work Awards" />
        <meta property="og:title" content="Vote - ETA Awards KE" />
        <meta property="og:description" content="Voting for your favorite nominees in the ETA Awards KE is simple and straightforward. Each vote costs KSh 10, and you can cast as many votes as you like for different categories. Your participation not only supports your favorite artists and leaders but also contributes to recognizing excellence across various fields in Kenya. Download our app to get started with the voting process." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/vote" />
        <meta property="og:image" content="https://etaawardske.co.ke/vote-og-image.jpg" />
        <meta name="twitter:title" content="Vote - ETA Awards KE" />
        <meta name="twitter:description" content="Voting for your favorite nominees in the ETA Awards KE is simple and straightforward. Each vote costs KSh 10, and you can cast as many votes as you like for different categories. Your participation not only supports your favorite artists and leaders but also contributes to recognizing excellence across various fields in Kenya. Download our app to get started with the voting process." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/vote-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full flex flex-col justify-center">
        <Navbar />
        <Header2 title="Vote Now" subtitle="Support Your Favourite Nominee in Various Categories" />

        <div className="w-full flex flex-col justify-center items-center">
          <div className="container p-3 sm:px-8 w-full">
            <div className="mb-6 flex items-center bg-[#191919] rounded-md px-2 sm:px-4">
            <FaSearch className='text-gray-300 text-lg ' />
              <input
                type="text"
                placeholder="Search by category name or code"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-3 px-2 text-gray-400 bg-[#191919] focus:outline-none"
              />
              
            </div>
            <div className="w-full">
              <ul className="w-full text-gray-400 text-base leading-7">
                {filteredCategories.map((category) => (
                  <li
                    key={category.code}
                    className="cursor-pointer bg-[#191919] my-1 hover:bg-[#151515] rounded-md p-2 py-2.5"
                    onClick={() => handleCategoryClick(category.name,category.code)}
                  >
                    {category.name} ({category.code})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotePage;
