import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useAddNomination = () => {
  const [isAdding, setIsAdding] = useState(false);

  const addNomination = async (nominationData) => {
    setIsAdding(true);

    try {
      if (!validateNominationData(nominationData)) {
        toast.error('Please fill out all fields before submitting the nomination.');
        setIsAdding(false);
        return;
      }

      await addDoc(collection(firestore, 'nominations'), nominationData);
      toast.success('Nomination submitted successfully.');
    } catch (error) {
      toast.error('Error submitting nomination');
      console.error('Error submitting nomination:', error);
    }

    setIsAdding(false);
  };

  const validateNominationData = (nominationData) => {
    const { first_name, last_name, label, category, phone, nominee_county, nominator_county, note } = nominationData;
    return first_name && last_name && label && category && phone && nominee_county && nominator_county && note;
  };

  return { isAdding, addNomination };
};

export default useAddNomination;
