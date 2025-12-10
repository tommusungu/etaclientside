import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero"
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file
import { Helmet } from 'react-helmet-async';
import About from '../components/About';
import Choose from '../components/Choose';
import Gallery from '../components/Gallery';
import Clients from '../components/Clients';
import VideoComponent from '../components/VideoComponent';
const HomePage = () => {
  
  const [aosInitialized, setAOSInitialized] = useState(false);

  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({ duration: 1200 }); // Initialize AOS with options
      setAOSInitialized(true);
    }
  }, [aosInitialized]);

  return (
    <div className="bg-[#101010]">
     
     <Helmet>
        <title>ETA Awards KE - Home</title>
        <meta name="description" content="We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways." />
        <meta name="keywords" content="ETA Awards, Kenya Awards, Entertainment Awards, Leadership Awards, Business Awards, Community Work Awards, Kenya Greats, Eastern Talanta Awards, Eastern Kenya Awards, Awards in Kenya, Celebrating Talents, Talented artists, Talent in Kenya" />
        <meta property="og:title" content="ETA Awards KE - Home" />
        <meta property="og:description" content="We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/" />
        <meta property="og:image" content="https://etaawardske.co.ke/ETA 2024.jpg" />
        <meta name="twitter:title" content="ETA Awards KE - Home" />
        <meta name="twitter:description" content="We identify, recognize and award the best in different fields; Entertainment, Leadership and Governance, Business and Community Work. The Award ceremony will showcase the Greats of Kenya in their trades, as they help make Kenya great in their different ways." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className='w-full flex flex-col justify-center  bg-[#101010]'>
    
    
       <Navbar/>
       <Hero AOS={AOS}/>
       
   </div>
  
   <div className='w-full flex justify-center flex-col items-center bg-[#101010]'>
   <About/>
   <Choose/>
   </div>
   
   <div className='w-full flex justify-center flex-col items-center bg-[#101010]'>
   <VideoComponent/>
   <Gallery/> 
   <Clients/>
</div>

    </div>
  )
}

export default HomePage