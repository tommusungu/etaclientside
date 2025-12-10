import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Navbar from '../components/Navbar';
import Header2 from '../components/Header2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const VoteNominee = () => {
  const { code, name } = useParams();
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNominee, setSelectedNominee] = useState(null);
  const [votes, setVotes] = useState(1);
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mpesa'); // New state for payment method

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await fetch(`https://portal.etaawardske.co.ke/api/get-category-nominees/${code}`);
        if (!response.ok) {
          throw new Error('Failed to fetch nominees');
        }
        const data = await response.json();
        setNominees(data.nominees || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNominees();
  }, [code]);

  const handleVoteSubmission = async () => {
    if (phone.trim() === '' && paymentMethod === 'mpesa') {
      toast.error('Please enter a phone number');
      return;
    }

    const payload = {
      nominee_code: selectedNominee.nominee_code,
      phone,
      votes,
    };

    setSubmitting(true);

    try {
      const response = await fetch('https://portal.etaawardske.co.ke/api/push-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.success) {
          toast.success(result.success);
          setModalOpen(false);
        } else if (result.error) {
          toast.error(result.error);
        } else {
          toast.success('Unexpected success response');
        }
      } else {
        if (result.errors) {
          Object.keys(result.errors).forEach(key => {
            result.errors[key].forEach(error => {
              toast.error(error);
            });
          });
        } else {
          toast.error('Unexpected error response');
        }
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

    const handlePayPalPayment = () => {
      window.open('https://portal.etaawardske.co.ke/create-transaction', '_blank');
    };
  

  if (loading) return <div className="flex justify-center items-center w-full h-[100vh] bg-[#101010]"><div className="custom-loader"></div></div>;
  if (error) return <div className="flex justify-center items-center w-full h-[100vh] text-gray-400 bg-[#101010]">Error: {error}</div>;

  return (
    <div className="bg-[#101010] text-gray-300">
      <div className="w-full flex flex-col justify-center">
        <Navbar />
        <Header2 title="Nominees" subtitle={name} />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="container p-3 sm:px-8 w-full">
            <ul className="w-full">
              {nominees.length === 0 ? (
                <div className="flex-1 justify-center items-center text-center w-full h-[100vh] text-gray-400 bg-[#101010]">
                  <li>No nominees found for this category.</li>
                </div>
              ) : (
                nominees.map((nominee) => (
                  <li
                    key={nominee.nominee_code}
                    className="w-full cursor-pointer bg-[#191919] my-1 hover:bg-[#151515] rounded-md p-2 py-2.5 text-gray-400"
                    onClick={() => {
                      setSelectedNominee(nominee);
                      setVotes(1);
                      setPhone('');
                      setModalOpen(true);
                    }}
                  >
                    {nominee.nominee_name}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={() => setModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-[#191919] shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-300 text-center">
                    Vote for {selectedNominee?.nominee_name}
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setVotes((prev) => Math.max(1, prev - 1))}
                        className="rounded-full p-1 border border-yellow-500 text-yellow-500 hover:opacity-50"
                      >
                        <FaMinus size={20} />
                      </button>
                      <input
                        type="number"
                        value={votes}
                        onChange={(e) => setVotes(Math.max(1, Number(e.target.value)))}
                        className="text-center w-12 bg-[#191919]  text-gray-400 text-lg font-medium"
                      />
                      <button
                        onClick={() => setVotes((prev) => prev + 1)}
                        className="rounded-full p-1 border border-yellow-500 text-yellow-500 hover:opacity-50"
                      >
                        <FaPlus size={20} />
                      </button>
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Mpesa Number to pay"
                      className={`w-full p-2 mb-4 bg-transparent border-b border-gray-400 outline-none text-gray-300 ${paymentMethod === 'mpesa' ? '' : 'hidden'}`}
                    />
                    {paymentMethod === 'mpesa' && (
                      <div className="my-4 text-gray-300 text-sm sm:text-base">
                        <p className="mb-2">If the push notification fails, please make the payment manually using the following details:</p>
                        <p>Paybill: <strong>4168587</strong></p>
                        <p>Account: <strong>{selectedNominee?.nominee_code}</strong></p>
                        <p>Amount: <strong>Ksh {votes * 10}</strong></p>
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="mpesa"
                          className='text-gray-100 cursor-pointer'
                          checked={paymentMethod === 'mpesa'}
                          onChange={() => setPaymentMethod('mpesa')}
                        />
                        <span className='text-gray-100 cursor-pointer'>MPesa</span>
                      </label>
                      <a target='_blank' href='https://portal.etaawardske.co.ke/create-transaction' className="flex items-center space-x-2">
                        <span className='h-3 w-3 bg-gray-100 rounded-full'></span>
                        <span className='text-gray-100 cursor-pointer'>PayPal</span>
                      </a>
                    </div>
                    <button
                      onClick={paymentMethod === 'mpesa' ? handleVoteSubmission : handlePayPalPayment}
                      disabled={submitting}
                      className="w-full mt-4 p-2 bg-green-600 hover:bg-green-500 text-gray-50  rounded-lg"
                    >
                      {submitting ? 'loading...' :  'Vote via MPesa' }
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </div>
  );
};

export default VoteNominee;
