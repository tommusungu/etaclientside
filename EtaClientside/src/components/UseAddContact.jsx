import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useAddContact = () => {
  const [isAdding, setIsAdding] = useState(false);

  const addContact = async (contactData) => {
    setIsAdding(true);

    try {
      if (!validateContactData(contactData)) {
        toast.error('Please fill out all fields before sending the message.');
        setIsAdding(false);
        return;
      } 

      await addDoc(collection(firestore, 'contact'), contactData);
      toast.success('Message sent successfully.');
    } catch (error) {
      toast.error('Error sending message');
    }

    setIsAdding(false);
  };

  const validateContactData = (contactData) => {
    const { firstName, lastName, email, message } = contactData;
    return firstName && lastName && email && message;
  };

  return { isAdding, addContact };
};

export default useAddContact;
