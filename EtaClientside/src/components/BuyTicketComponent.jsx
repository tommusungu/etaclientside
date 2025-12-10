import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyTicketComponent = () => {
  const [formData, setFormData] = useState({
    type: 'regular', // Default ticket type in lowercase
    tickets: 1, // Default number of tickets
    phone: '',
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const [errors, setErrors] = useState({}); // Add state to store errors

  const ticketPrices = {
    regular: 1000,
    vip: 1500,
  };

  const validTypes = ['regular', 'vip']; // Valid types in lowercase

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const response = await fetch('https://portal.etaawardske.co.ke/api/ticket-push-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: formData.type.toLowerCase(),
          tickets: formData.tickets,
          phone: formData.phone,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Check your phone for the ticket purchase.');
        setFormData({
          type: 'regular', // Reset to default lowercase type
          tickets: 1,
          phone: '',
        });
        setErrors({}); // Clear errors on successful submission
      } else {
        // API errors
        toast.error('Error: Please check your input and try again.');
        setErrors(result.errors || {}); // Update errors state
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="text-gray-200">
      <div className="container mx-auto max-w-xl bg-[#202020] rounded-lg p-4 py-6 sm:p-12">
        <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">Purchase Your Tickets!</h1>
        <p className="text-gray-300 text-base outline-none leading-7 gap-2">
          Please fill out the form below with your details and ticket preferences.
        </p>
        <form onSubmit={handleSubmit} className="mt-2 w-full sm:mt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-400">
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-semibold leading-6 text-gray-400">
                Ticket Type
              </label>
              <div className="mt-2.5 uppercase">
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`bg-black block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6 ${errors.type ? 'border-red-500' : ''}`}
                >
                  {validTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)} - KSh {ticketPrices[type]}
                    </option>
                  ))}
                </select>
                {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="tickets" className="block text-sm font-semibold leading-6 text-gray-400">
                Number of Tickets
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="tickets"
                  id="tickets"
                  min="1"
                  value={formData.tickets}
                  onChange={handleChange}
                  className={`bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6 ${errors.tickets ? 'border-red-500' : ''}`}
                />
                {errors.tickets && <p className="text-red-500 text-sm">{errors.tickets}</p>}
              </div>
            </div>
          </div>
          <div className="w-full sm:col-span-2 mt-6">
            <button
              type="submit"
              className={`px-4 py-2 rounded ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} text-white`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </form>
        
        <div className='w-full my-4 flex items-center'>
          <div className='w-full bg-gray-400 h-[1px]'/>
          <p className='text-lg rounded-md px-3 text-gray-400'>OR</p>
          <div className='w-full bg-gray-400 h-[1px]'/>
        </div>
        <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400 mb-2">Purchase Via PayBill</h1>
        <p className="text-gray-300 text-base outline-none leading-7 gap-2">
          Paybill : 4168587
        </p>
        <p className="text-gray-300 text-base outline-none leading-7 gap-2">
          Account : Use prefix R for Regular Tickets or V for VIP Tickets followed by your Phone Number. For example, R0712345678
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BuyTicketComponent;
