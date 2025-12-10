import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionItem = ({ headerTitle, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full rounded-[30px] border border-gray-600">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full p-4 sm:px-8  text-left  focus:outline-none"
      >
        <span  className="text-start text-base sm:text-lg font-semibold  text-gray-400">{headerTitle}</span>
        <div className="text-start text-base sm:text-lg font-semibold  text-gray-400">
        {isOpen ? (
          <FaMinus />
        ) : (
          <FaPlus />
        )}
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-2 sm:px-8">
          
          <p className="text-gray-300 text-sm sm:text-base outline-none leading-7 gap-2">
          {description}
            </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
