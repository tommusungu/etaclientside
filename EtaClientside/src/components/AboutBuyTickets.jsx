// import { FaCloudDownloadAlt } from 'react-icons/fa';
import heroImage from '../assets/newImage.jpg';
import BuyTicketComponent from './BuyTicketComponent';
// import feeStructure from '../assets/StarliteFeeStructure.pdf'; // Adjust the path to your PDF file

export default function AboutBuyTickets({ AOS }) {
  return (
    <div className="pt-6 w-full">
      <div className="flex flex-col justify-center items-center w-full">
       
          
          <div data-aos="fade-up" className="w-full sm:w-3/4 md:1/2 flex justify-center h-auto">
            <div className="w-full text-left">
              
              
              

            <BuyTicketComponent/>
              

              
              
              
            

            
          </div>
        </div>
      </div>
    </div>
  );
}
