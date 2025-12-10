import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import PageMeta from '../components/PageMeta';
import Navbar from '../components/Navbar';
import Header2 from '../components/Header2';
import ContactComponent from '../components/ContactComponent';
import UseAddContact from '../components/UseAddContact';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const { isAdding, addContact } = UseAddContact();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addContact(formData);

    // Clear the form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - ETA Awards KE</title>
        <meta name="description" content="Contact ETA Awards KE for inquiries, support, or partnership opportunities. Reach out to us for more information." />
        <meta name="keywords" content="ETA Awards, Contact ETA Awards KE, Support ETA Awards KE, Partnership ETA Awards KE" />
        <meta property="og:title" content="Contact Us - ETA Awards KE" />
        <meta property="og:description" content="Contact ETA Awards KE for inquiries, support, or partnership opportunities. Reach out to us for more information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/contact" />
        <meta property="og:image" content="https://etaawardske.co.ke/contact-og-image.jpg" />
        <meta name="twitter:title" content="Contact Us - ETA Awards KE" />
        <meta name="twitter:description" content="Contact ETA Awards KE for inquiries, support, or partnership opportunities. Reach out to us for more information." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/contact-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className='w-full  flex flex-col justify-center items-center bg-[#101010] '>
        <Header2 title='Contact us' subtitle='Your Voice Matters, Contact Us'/>
      </div>

      <div className="isolate bg-[#101010] px-3 py-2 sm:pb-6 lg:px:12 md:px-12 sm:px-12">
        <div className='w-full py-8 flex flex-col justify-center items-center'>
        </div>

        <div className="flex flex-wrap pb-12">
          <div className="mx-auto max-w-2xl text-center mx-auto mt-2 max-w-xl sm:mt-2">
            <div className="flex space-x-2 items-center relative">
              <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">Get in Touch</h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-left">
            {/* We aspire to be the most prestigious and most sought after music Awards in Kenya and East Africa, by the artists, sponsors, and music lovers. */}
            Awards are recognitions given to personalities or groups for their excellence, achievement, or contributions in a particular field.ETA Awards Ke serve to celebrate achievements, motivate individuals, and boost morale.
            </p>
            <ContactComponent />
          </div>

          <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-2 w-full max-w-xl sm:mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-400">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-400">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-400">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='name@email.com'
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-400">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder='Message us'
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="w-full  sm:col-span-2 mt-6">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Submit
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
