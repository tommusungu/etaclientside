import React from 'react'
import Navbar from '../components/Navbar'
import Header2 from '../components/Header2'
import Album from '../components/Album'
import { Helmet } from 'react-helmet-async'

const GalleryPage = () => {
  return (
    <div className="bg-[#101010]">
     <Helmet>
        <title>Our Gallery - ETA Awards KE</title>
        <meta name="description" content="Explore the gallery of ETA Awards KE showcasing the best moments from our events, awards ceremonies, and more." />
        <meta name="keywords" content="ETA Awards, Gallery ETA Awards KE, ETA Awards Events, Awards Ceremonies ETA Awards KE" />
        <meta property="og:title" content="Our Gallery - ETA Awards KE" />
        <meta property="og:description" content="Explore the gallery of ETA Awards KE showcasing the best moments from our events, awards ceremonies, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/our-gallery" />
        <meta property="og:image" content="https://etaawardske.co.ke/gallery-og-image.jpg" />
        <meta name="twitter:title" content="Our Gallery - ETA Awards KE" />
        <meta name="twitter:description" content="Explore the gallery of ETA Awards KE showcasing the best moments from our events, awards ceremonies, and more." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/gallery-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className='w-full flex flex-col justify-center  bg-[#101010]'>
    
    <Navbar/>
      <Header2 title='Our Gallery' subtitle='Gallery of Excellence and Achievement'/>
      <div className='w-full flex flex-col justify-center items-center '>
     <Album/>
      </div>
    </div>
    </div>
  )
}

export default GalleryPage