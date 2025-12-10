import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: 'rgb(229 231 235)',
    border: 'none',
    boxShadow: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'gray',
  }),
  input: (provided) => ({
    ...provided,
    color: 'gray',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'gray',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'white' : 'black',
    color: 'gray',
  }),
};

const CategorySelectTwo = ({ formData, handleChange }) => {
  const categories = [
    { code: 'best-governor', name: 'Best Governor' },
    { code: 'best-deputy-governor', name: 'Best Deputy Governor' },
    { code: 'best-speaker', name: 'Best Speaker' },
    { code: 'best-cecm', name: 'Best CECM' },
    { code: 'best-mp', name: 'Best MP' },
    { code: 'best-senator', name: 'Best Senator' },
    { code: 'best-woman-rep', name: 'Best Woman Rep' },
    { code: 'best-mca', name: 'Best MCA' },
  ];

  const options = categories.map(category => ({
    value: category.code,
    label: category.name,
  }));

  const handleSelectChange = selectedOption => {
    handleChange({ target: { name: 'category', value: selectedOption ? selectedOption.value : '' } });
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold leading-6 text-gray-400">Select Category *</label>
      <Select
        value={options.find(option => option.value === formData.category)}
        onChange={handleSelectChange}
        options={options}
        placeholder="Search category here ..."
        styles={customStyles}
        className='bg-black block w-full rounded-md border-0 px-1 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6'
        isClearable
      />
    </div>
  );
};

export default CategorySelectTwo;
