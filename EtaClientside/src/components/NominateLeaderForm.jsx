import React, { useState } from 'react';
import CategorySelectTwo from './CategorySelectTwo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAddNomination from './useAddNomination';

const counties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
  "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu",
  "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru",
  "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
  "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", "Turkana",
  "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];

const initialFormData = {
  firstName: '',
  lastName: '',
  officialName: '',
  category: '',
  phone: '',
  nomineeCounty: '',
  nominatorCounty: '',
  link: '',   
  bio: '',
};

export default function NominateLeaderForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { isAdding, addNomination } = useAddNomination();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReadMore = () => {
    setIsExpanded(true);
    setHasReadTerms(true);
  };

  const handleAgreeChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!hasReadTerms || !agreeToTerms) {
      toast.error('Please read and agree to the terms before submitting.');
      return;
    }

    const nominationData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      label: formData.officialName,
      category: formData.category,
      phone: formData.phone,
      nominee_county: formData.nomineeCounty,
      nominator_county: formData.nominatorCounty,
      facebook: formData.link,
      note: formData.bio,
    };

    await addNomination(nominationData);
    if (!isAdding) {
      setFormData(initialFormData); // Clear the form
      setAgreeToTerms(false);
      setHasReadTerms(false);
      setIsExpanded(false);
    }
  };

  const termsText = "ETA AWARDS KE management believes in Servant leadership where duty bearers prioritize the fulfillment of the needs of their subjects. By filling this survey, you confirm to the management that your nominee has fulfilled his/her duty thus deserves a global recognition. Kindly take note that the shortlisted nominees will be contacted for physical county assessment.";

  return (
    <div className="py-6 pt-3 container sm:px-20">
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="w-full sm:col-span-2">
          <div className="py-6 w-full flex justify-start space-x-2 items-center relative">
            <h1 className="text-2xl sm:text-4xl font-semibold text-gray-400">Nominator Details</h1>
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Your First Name..."
            required
          />
        </div>
       
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Your Last Name..."
            required
          />
        </div>
        
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Your Phone Number..."
            required
          />
        </div>
        
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Your County *</label>
          <select
            name="nominatorCounty"
            value={formData.nominatorCounty}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            required
          >
            <option value="" disabled>Your County...</option>
            {counties.map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
        </div>
        
        <div className="w-full flex justify-start sm:col-span-2">
          <div className="py-6 w-full flex justify-start space-x-2 items-center relative">
            <h1 className="text-2xl sm:text-4xl font-semibold text-gray-400">Nominee Details</h1>
          </div>
        </div>

        <div className="w-full sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Nominee Name *</label>
          <input
            type="text"
            name="officialName"
            value={formData.officialName}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Official Name..."
            required
          />
        </div>

        <div className="w-full sm:col-span-2">
          <CategorySelectTwo formData={formData} handleChange={handleChange} />
        </div>
        
        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">County *</label>
          <select
            name="nomineeCounty"
            value={formData.nomineeCounty}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            required
          >
            <option value="" disabled>Nominee County...</option>
            {counties.map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Attach a Link to the Leader's Work(optional)</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Enter link or Bio..."
            
          />
        </div>

        <div className="w-full sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-400">Reason for Nomination *</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="bg-black block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-500 outline-none sm:text-sm sm:leading-6"
            placeholder="Write a brief note about the nominee..."
            
          />
        </div>


        {/* Terms and Conditions Section */}
        <div className="w-full sm:col-span-2">
          <div className="mt-6 p-4 border border-gray-700 rounded-md bg-black">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">Terms and Conditions</h3>
            <div className="text-sm leading-8 text-gray-300">
              {!isExpanded ? (
                <div>
                  <p className="mb-3">
                    {termsText.substring(0, 100)}...
                  </p>
                  <button
                    type="button"
                    onClick={handleReadMore}
                    className="text-yellow-500 hover:text-yellow-400 underline font-medium"
                  >
                    Read More
                  </button>
                </div>
              ) : (
                <p className="mb-3 text-sm">
                  {termsText}
                </p>
              )}
            </div>

            {hasReadTerms && (
              <div className="mt-4 flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeToTerms}
                  onChange={handleAgreeChange}
                  className="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-800"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                  I have read and agree to the terms and conditions stated above.
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="w-full sm:col-span-2">
          <button 
            type="submit" 
            className={`px-4 py-2 rounded font-medium transition-colors ${
              (!hasReadTerms || !agreeToTerms || isAdding)
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
            disabled={!hasReadTerms || !agreeToTerms || isAdding}
          >
            {isAdding ? 'Submitting...' : 'Submit Nomination'}
          </button>
        </div>
      </form>
    </div>
  );
}