// import { FaCloudDownloadAlt } from 'react-icons/fa';
import heroImage from '/eta_schedule.jpg';
// import feeStructure from '../assets/StarliteFeeStructure.pdf'; // Adjust the path to your PDF file

export default function AboutSection({ AOS }) {
  return (
    <div className="pt-6 w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-full grid sm:grid-cols-2 gap-12 sm:gap-6">
          <div data-aos="fade-up"  className="w-full flex justify-center order-last">
            <img
              className="w-full  sm:h-[85vh] rounded-sm object-contain object-top"
              src={heroImage}
              alt="Hero image"
            />
          </div>
          
          <div data-aos="fade-up" className="w-full flex justify-center h-auto">
            <div className="w-full text-left">
              <div  className="py-2 sm:pt-0 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                  ETA Awards KE
                  </h1>
                </div>
                <div className="py-1 w-full">
                  <p className="text-gray-300 text-base outline-none leading-7 gap-2">
                  We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways.
                  </p>
                </div>
              </div>

              
              <div  className="py-2 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                     Vision
                  </h1>
                </div>
                <div className="py-1 w-full">
                  <p className="text-gray-300 text-base outline-none leading-7 gap-2">
                  To be the most prestigious and most sought-after Awards event in Kenya and East Africa by all stakeholders.               </p>
                </div>
              </div>

              <div  className="py-2 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                     Vision Statement
                  </h1>
                </div>
                <div className="py-1 w-full">
                  <p className="text-gray-300 text-base outline-none leading-7 gap-2">
                  To be the best East African Awards event of all time.      </p>
                </div>
              </div>
              <div  className="py-2 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                     Mission
                  </h1>
                </div>
                <div className="py-1 w-full">
                  <p className="text-gray-300 text-base outline-none leading-7 gap-2">
                  Promoting excellence in Arts, Governance, Business and Community Service; transforming the image of East African market into top quality and world class industries. 
                  </p>
                </div>
              </div>
              

              
              
              
            

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
