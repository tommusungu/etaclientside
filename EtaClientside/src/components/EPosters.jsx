import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2canvas from 'html2canvas';
import Template from './Template';

const EPosters = () => {
  const [nomineeCode, setNomineeCode] = useState('');
  const [nomineeData, setNomineeData] = useState(null);
  const [image, setImage] = useState(null);
  const [fetching, setFetching] = useState(false);

  const fetchNomineeData = async () => {
    setFetching(true);
    try {
      const response = await fetch(`https://portal.etaawardske.co.ke/api/nominee/${nomineeCode}`);
      if (!response.ok) {
        throw new Error('Nominee not found');
      }
      const data = await response.json();
      setNomineeData(data);
    //   toast.success('Nominee data fetched successfully!');
      toast.success('E-Poster generated successfully!');
    } catch (error) {
      toast.error('Error fetching nominee data');
      setNomineeData(null);
    } finally {
      setFetching(false);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    fetchNomineeData();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const generateImage = async () => {
    const element = document.getElementById('poster');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/jpeg');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = `eta_awards_${nomineeData.nominee.nominee_code}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-6 pt-3 container sm:px-20">
      <ToastContainer />
      <form onSubmit={handleGenerate} className="w-full h-[60vh] flex flex-col text-center justify-center items-center gap-3">
        <div className="w-full max-w-md">
          <label className="block text-3xl mb-6 font-semibold leading-6 text-gray-400">Enter Your Code</label>
          <input
            type="text"
            name="nominee_code"
            value={nomineeCode}
            onChange={(e) => setNomineeCode(e.target.value)}
            className="bg-black block w-full rounded-full border-0 px-5 py-4 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Your Nominee Code..."
            required
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center max-w-md mt-6">
          <label className="block text-3xl mb-6 font-semibold leading-6 text-gray-400">Upload Image</label>
          <input
            required
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-gray-200"
          />
        </div>


        <button type="submit" className="bg-green-600 rounded-full px-8 py-3 text-gray-200 mt-6 text-lg hover:bg-green-500 w-fit" disabled={fetching}>
          {fetching ? 'Generating...' : 'Generate'}
        </button>
        
      </form>
      {nomineeData && image && (
        <div className="mt-6 text-center flex flex-col items-center justify-center">
          
          <Template nomineeData={nomineeData} image={image} />
          <button onClick={generateImage} className="bg-blue-600 rounded-full px-8 py-3 text-gray-200 mt-6 text-lg hover:bg-blue-500 w-fit">
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default EPosters;
