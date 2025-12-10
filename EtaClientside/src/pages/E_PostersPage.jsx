import React from 'react';
import Header2 from '../components/Header2';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import EPosters from '../components/EPosters';

const E_PostersPage = () => {
  return (
    <div className="bg-[#101010]">
      <Helmet>
        <title>E-Posters - ETA Awards KE</title>
        <meta name="description" content="Generate custom E-Posters for ETA Awards KE to showcase nominees in categories like Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta name="keywords" content="ETA Awards E-Posters, Generate E-Posters, ETA Awards, Custom E-Posters, Nominee Posters" />
        <meta property="og:title" content="E-Posters - ETA Awards KE" />
        <meta property="og:description" content="Generate custom E-Posters for ETA Awards KE to showcase nominees in categories like Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/e-posters" />
        <meta property="og:image" content="https://etaawardske.co.ke/e-posters-og-image.jpg" />
        <meta name="twitter:title" content="E-Posters - ETA Awards KE" />
        <meta name="twitter:description" content="Generate custom E-Posters for ETA Awards KE to showcase nominees in categories like Entertainment, Leadership and Governance, Business, and Community Work." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/e-posters-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='w-full flex flex-col justify-center'>
        <Navbar />
        {/* <Header2 title='E-Posters' subtitle='Create Stunning E-Posters for Your Nominees' /> */}
        <div className='w-full flex flex-col justify-center items-center '>
          <div className='container p-3 sm:px-8 w-full'>
            <EPosters />
          </div>
        </div>
      </div>
    </div>
  );
}

export default E_PostersPage;
