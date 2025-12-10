import React from 'react';
import logo from '/ETA-25-logo-2.png'; 

const Template = ({ nomineeData, image }) => {
  const { nominee_name, nominee_category, nominee_code } = nomineeData.nominee;

  return (
    <div className="flex justify-center">
      <div id="poster" className="relative bg-[#141414] p-4 text-center overflow-auto w-[786px] max-w-full">
        <div className="grid grid-cols-2 gap-2 w-full pb-2 text-gray-200">
          <div className="col-span-1 w-full">
            <div className="flex items-center justify-center">
              <img src={logo} className="w-3/5 h-auto object-contain" />
            </div>
            <div>
              <h3 className="w-full text-gray-50 text-center italic text-5xl mt-2 mb-4">To Vote For</h3>
              <div className="flex items-center justify-start w-full pt-2 relative">
                <p className="bg-red-600 px-2 pb-2 pt-1 w-32 text-start">Name:</p>
                <p className="bg-gray-200 p-2 rounded-l-sm text-black text-2xl w-full">{nominee_name}</p>
              </div>
              <h3 className="w-full text-gray-50 text-center italic text-5xl mt-2 mb-4">As</h3>
              <div className="flex items-center justify-start w-full pt-2">
                <p className="bg-red-600 px-2 pb-2 pt-1 text-start w-32">Category:</p>
                <p className="bg-gray-200 p-2 rounded-l-sm text-black text-2xl w-full">{nominee_category}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-full h-full rounded-sm" />
          </div>
        </div>
        <div className="w-full">
          <div className="bg-gray-200 grid grid-cols-2">
            <div className="flex items-center flex-col justify-center py-2">
              <h3 className="text-4xl font-[900] pt-2">DIAL *250*22#</h3>
              <h3 className="text-xl font-[900] pt-2">ENTER NOMINEE CODE</h3>
              <h3 className="text-3xl font-[900] py-2">{nominee_code}</h3>
            </div>
            <div className="flex items-center w-full">
              <div className="bg-red-600 h-full w-full flex flex-col justify-center items-start px-4 gap-2 text-xl font-medium text-gray-200">
                <h3 className='font-semibold'>OR VOTE VIA PAYBILL</h3>
                <h3 className='text-lg'>Paybill: 4168587</h3>
                <h3 className='text-lg'>Account: {nominee_code}</h3>
                <h3 className='text-lg'>Amount: 10/= per vote </h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start text-start w-full whitespace-nowrap bg-gray-200">
            <div className="bg-red-600 px-4 py-1 pb-3 text-xl font-medium text-gray-200 text-center w-1/2">
              <h3>1 VOTE = KSH. 10/= </h3>
            </div>
            <div className="text-xl font-semibold text-center text-red-600 bg-gray-200 px-4 py-1 pb-3 w-1/2">
              <h3>VOTE AS MANY TIMES AS YOU CAN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
