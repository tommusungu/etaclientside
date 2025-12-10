import { Link } from 'react-router-dom';
import Image from '../assets/img/eta-category.png';
// import Image from '../assets/img/2024_1.jpg';

import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export default function ChooseComponent({ AOS }) {
  const goals = [
    "To produce a glamorous and dazzling awards event that portrays the endowment of arts industry in Kenya and East Africa.",
    "To promote unity and harmonious living amongst the different community groups using community-led governance approach as an art discipline.",
    "To encourage excellence in community service, through positive competition and recognition.",
    "Conjure up a sense of pride within local businesses, and contribute to higher morale, motivation, and positive work culture, by networking with other world-class music awards.",
    "To promote morality and positive living through music as an alternative and positive entertainment.",
    "To promote music business as a profitable industry.",
  ];

  return (
    <div className="pt-6 w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-full grid sm:grid-cols-2 gap-12 sm:gap-6">
          <div data-aos="fade-up" className="w-full flex justify-center order-last sm:order-first">
            <img
                          className="w-full  sm:h-[85vh] rounded-sm object-contain object-top"
                          src={Image}
                          alt="Hero image"
                        />
          </div>

          <div data-aos="fade-up" className="w-full flex justify-center h-auto">
            <div className="w-full text-left">
              <div className="py-2 sm:pt-0 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                    Our Objectives
                  </h1>
                </div>
                 <div className="py-2 w-full">
      <ul className="space-y-2 pt-4">
        {goals.map((goal, index) => (
          <li key={index} className="flex items-start text-base text-gray-300 leading-relaxed">
            <FiCheckCircle className="mt-1 mr-3 text-yellow-500 flex-shrink-0" size={20} />
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
              </div>

              {/* <div className="py-2 w-full">
                <div className="w-full flex justify-between">
                  <h1 className="text-start text-xl sm:text-2xl font-semibold text-gray-400">
                    Voting Process
                  </h1>
                </div>
                <div className="py-1 w-full">
                  <p className="text-gray-300 text-base outline-none leading-7 gap-2">
                    Voting for your favorite nominees in the ETA Awards KE is simple and straightforward. Each vote costs KSh 10, and you can cast as many votes as you like for different categories.
                  </p>
                </div>
              </div> */}

              {/* <div className="py-2 w-full">
                <div className="w-full flex justify-between"></div>
                <div className="py-1 w-full">
                  <a
                    href="https://expo.dev/artifacts/eas/eEFDCB58bd3pv7CWEHfq1c.apk"
                    className='flex justify-center items-center gap-2 px-6 py-3 w-fit text-black bg-gray-300 hover:bg-gray-400'
                    download
                  >
                    Download Voting App <FiArrowUpRight />
                  </a>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
