import React from 'react'
import Header2 from '../components/Header2'
import Navbar from '../components/Navbar'
import NominationForm from '../components/NominationForm'
import { Helmet } from 'react-helmet-async'

const NominatePage = () => {
  return (
    <div className="bg-[#101010]">
        <Helmet>
        <title>Nominations - ETA Awards KE</title>
        <meta name="description" content="Nominate individuals for ETA Awards KE in categories including Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta name="keywords" content="ETA Awards Nominations, Nominate for ETA Awards, Entertainment Awards, Leadership Awards, Business Awards, Community Work Awards" />
        <meta property="og:title" content="Nominations - ETA Awards KE" />
        <meta property="og:description" content="Nominate individuals for ETA Awards KE in categories including Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/nominations" />
        <meta property="og:image" content="https://etaawardske.co.ke/nominations-og-image.jpg" />
        <meta name="twitter:title" content="Nominations - ETA Awards KE" />
        <meta name="twitter:description" content="Nominate individuals for ETA Awards KE in categories including Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/nominations-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className='w-full flex flex-col justify-center'>
    
    <Navbar/>
      <Header2 title='Nomination' subtitle='Your Nomination, Their Recognition'/>

      <div className='w-full flex flex-col justify-center items-center '>
      <div  className='container p-3 sm:px-8   w-full'>

        <NominationForm/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NominatePage