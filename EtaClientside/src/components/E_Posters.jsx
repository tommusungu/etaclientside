import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-toastify/dist/ReactToastify.css';
import 'react-resizable/css/styles.css';
import template from '../assets/template.jpg';

const nominees = [
  {
    nominee_code: '24F11A',
    nominee_name: 'Leshao Leshao - Parsinta E Mau Ft. Sweetstar',
    category: 'Video of the year'
  },
  {
    nominee_code: '24F11H',
    nominee_name: 'Oyiete- Pilaz Pilonje',
    category: 'Video of the year'
  },
  {
    nominee_code: '24F14F',
    nominee_name: 'Clarence Misiani',
    category: 'Gospel artist of the year'
  },
  {
    nominee_code: '24F14A',
    nominee_name: 'David Kasika',
    category: 'Gospel artist of the year'
  }
];

const E_Posters = () => {
  const [formData, setFormData] = useState({ nominee_code: '', nominee_name: '', category: '' });
  const [image, setImage] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNomineeCodeChange = (e) => {
    const nominee_code = e.target.value;
    const nominee = nominees.find(nom => nom.nominee_code === nominee_code);
    if (nominee) {
      setFormData({
        nominee_code: nominee.nominee_code,
        nominee_name: nominee.nominee_name,
        category: nominee.category
      });
    } else {
      setFormData({
        nominee_code: nominee_code,
        nominee_name: '',
        category: ''
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nominee = nominees.find(nom => nom.nominee_code === formData.nominee_code);
    if (!nominee) {
      toast.error('Nominee does not exist');
      return;
    }
    
    // Logic to merge the data with the template image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = template;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Add text
      ctx.font = '20px Arial';
      ctx.fillStyle = 'white';
      // Adjust coordinates as needed
      ctx.fillText(formData.nominee_name, draggableElements.nomineeName.x, draggableElements.nomineeName.y);
      ctx.fillText(formData.category, draggableElements.category.x, draggableElements.category.y);
      ctx.fillText(formData.nominee_code, draggableElements.nomineeCode.x, draggableElements.nomineeCode.y);

      // Add uploaded image
      if (image) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const uploadedImg = new Image();
          uploadedImg.src = event.target.result;
          uploadedImg.onload = () => {
            ctx.drawImage(uploadedImg, draggableElements.image.x, draggableElements.image.y, draggableElements.image.width, draggableElements.image.height);
            setMergedImage(canvas.toDataURL());
          };
        };
        reader.readAsDataURL(image);
      } else {
        setMergedImage(canvas.toDataURL());
      }
    };
  };

  const [draggableElements, setDraggableElements] = useState({
    nomineeName: { x: 50, y: 50 },
    category: { x: 50, y: 80 },
    nomineeCode: { x: 50, y: 110 },
    image: { x: 100, y: 100, width: 400, height: 590 }
  });

  const updateElementPosition = (element, data) => {
    setDraggableElements({
      ...draggableElements,
      [element]: {
        ...draggableElements[element],
        x: data.x,
        y: data.y
      }
    });
  };

  const updateImageSize = (data) => {
    setDraggableElements({
      ...draggableElements,
      image: {
        ...draggableElements.image,
        width: data.size.width,
        height: data.size.height
      }
    });
  };

  return (
    <div className="py-6 pt-3 container sm:px-20">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="w-full sm:col-span-2">
          <div className="py-6 w-full flex justify-start space-x-2 items-center relative">
            <h1 className="text-2xl sm:text-4xl font-semibold text-gray-400">Your Details</h1>
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Your Code *</label>
          <input
            type="text"
            name="nominee_code"
            value={formData.nominee_code}
            onChange={handleNomineeCodeChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Your Nominee Code..."
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Nominee Name</label>
          <input
            type="text"
            name="nominee_name"
            value={formData.nominee_name}
            readOnly
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            readOnly
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Upload Image *</label>
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="w-full sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md"
          >
            Generate E-Poster
          </button>
        </div>
      </form>
      <div className="relative w-full mt-6">
        <img src={template} alt="Template" className="w-full" />
        <Draggable
          position={{ x: draggableElements.nomineeName.x, y: draggableElements.nomineeName.y }}
          onStop={(e, data) => updateElementPosition('nomineeName', data)}
        >
          <div className="absolute text-white" style={{ cursor: 'move', zIndex: 10 }}>
            {formData.nominee_name}
          </div>
        </Draggable>
        <Draggable
          position={{ x: draggableElements.category.x, y: draggableElements.category.y }}
          onStop={(e, data) => updateElementPosition('category', data)}
        >
          <div className="absolute text-white" style={{ cursor: 'move', zIndex: 10 }}>
            {formData.category}
          </div>
        </Draggable>
        <Draggable
          position={{ x: draggableElements.nomineeCode.x, y: draggableElements.nomineeCode.y }}
          onStop={(e, data) => updateElementPosition('nomineeCode', data)}
        >
          <div className="absolute text-white" style={{ cursor: 'move', zIndex: 10 }}>
            {formData.nominee_code}
          </div>
        </Draggable>
        <Draggable
          position={{ x: draggableElements.image.x, y: draggableElements.image.y }}
          onStop={(e, data) => updateElementPosition('image', data)}
        >
          <ResizableBox
            width={draggableElements.image.width}
            height={draggableElements.image.height}
            onResizeStop={(e, data) => updateImageSize(data)}
            minConstraints={[50, 50]}
            maxConstraints={[300, 300]}
            className="absolute"
            style={{ cursor: 'move', zIndex: 10 }}
          >
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-full h-full" />}
          </ResizableBox>
        </Draggable>
      </div>
      {mergedImage && (
        <div className="mt-6">
          <h2 className="text-2xl text-gray-400">Generated E-Poster</h2>
          <img src={mergedImage} alt="Merged" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default E_Posters;
