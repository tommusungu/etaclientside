// UpdatesPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Program from '../components/Program';
import Database from '../Database';
import PageMeta from '../components/PageMeta';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const UpdatesPage = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const {blogs} = Database();
    const selectedEvent = blogs.find(event => event.id === id);

    return (
        <div>
            {selectedEvent ? (
                <div >
               
      <PageMeta
        title={selectedEvent.title}
        description={selectedEvent.description}
      />
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center bg-[#101010] ">
            {/* <Header title='Our Events' /> */}
            
                   <Program selectedEvent={selectedEvent} products={blogs}/>
                </div></div>
            ) : (
                <div>
                <div className="flex justify-center items-center w-full h-[100vh] bg-[#101010]"><div className="custom-loader"></div></div>
                </div>
            )}
        </div>
    );
}

export default UpdatesPage;
