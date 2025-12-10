import React from 'react'
import Header2 from '../components/Header2'
import Navbar from '../components/Navbar'
import PageMeta from '../components/PageMeta'
import AboutSection from '../components/AboutSection'
import FAQ from '../components/FAQ'
import { Helmet } from 'react-helmet-async';
import AboutSectionTwo from '../components/AboutSectionTwo'

const AboutPage = () => {
  return (
    <div className="bg-[#101010]">
        <Helmet>
        <title>About Us - ETA Awards KE</title>
        <meta name="description" content="Learn more about ETA Awards KE, where we identify, recognize, and award the best in Entertainment, Leadership and Governance, Business, and Community Work in Kenya." />
        <meta name="keywords" content="ETA Awards, Kenya Awards, Entertainment Awards, Leadership Awards, Business Awards, Community Work Awards, About ETA Awards KE" />
        <meta property="og:title" content="About Us - ETA Awards KE" />
        <meta property="og:description" content="Learn more about ETA Awards KE, where we identify, recognize, and award the best in Entertainment, Leadership and Governance, Business, and Community Work in Kenya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/about-us" />
        <meta property="og:image" content="https://etaawardske.co.ke/ETA 2024.jpg" />
        <meta name="twitter:title" content="About Us - ETA Awards KE" />
        <meta name="twitter:description" content="Learn more about ETA Awards KE, where we identify, recognize, and award the best in Entertainment, Leadership and Governance, Business, and Community Work in Kenya." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/about-us-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className='w-full flex flex-col justify-center'>
    
    <Navbar/>
      <Header2 title='About us' subtitle='Celebrating Eastern Kenya’s Creative Excellence.'/>

      <div className='w-full flex flex-col justify-center items-center '>
      <div  className='container p-3 pt-12 sm:px-8   w-full'>

        <AboutSection/>
        <AboutSectionTwo/>
        
        
        <FAQ/>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default AboutPage