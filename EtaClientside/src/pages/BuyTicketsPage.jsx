import React from 'react';
import Header2 from '../components/Header2';
import Navbar from '../components/Navbar';
import PageMeta from '../components/PageMeta';
import AboutBuyTickets from '../components/AboutBuyTickets';
import FAQ from '../components/FAQ';
import { Helmet } from 'react-helmet-async';

const BuyTicketsPage = () => {
  return (
    <div className="bg-[#101010]">
      <Helmet>
        <title>Buy Tickets - ETA Awards KE</title>
        <meta name="description" content="Purchase your tickets for the ETA Awards KE. Get access to exclusive events and celebrate excellence in Entertainment, Leadership, Business, and Community Work in Kenya." />
        <meta name="keywords" content="Buy Tickets, ETA Awards KE, Event Tickets, Entertainment Awards, Leadership Awards, Business Awards, Community Work Awards, Kenya" />
        <meta property="og:title" content="Buy Tickets - ETA Awards KE" />
        <meta property="og:description" content="Purchase your tickets for the ETA Awards KE and enjoy a celebration of excellence in various categories across Kenya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etaawardske.co.ke/buy-tickets" />
        <meta property="og:image" content="https://etaawardske.co.ke/ETA 2024.jpg" />
        <meta name="twitter:title" content="Buy Tickets - ETA Awards KE" />
        <meta name="twitter:description" content="Get your tickets for the ETA Awards KE and be part of a prestigious event recognizing top talents and achievements in Kenya." />
        <meta name="twitter:image" content="https://etaawardske.co.ke/tickets-twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className='w-full flex flex-col justify-center'>
        <Navbar />
        <Header2 title='Buy Tickets' subtitle='Grab Your Tickets Here' />

        <div className='w-full flex flex-col justify-center items-center'>
          <div className='container p-3 pt-12 sm:px-8 w-full'>
            <AboutBuyTickets />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicketsPage;
