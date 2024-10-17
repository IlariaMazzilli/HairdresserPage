import React from 'react';
import Navbar from '../components/Navbar';
import team from '../assets/HAIRDRESSERTEAM.png';
import Footer from '../components/Footer';

function Team() {
  return (
    <div>
      <Navbar />
      <h1 className='flex justify-center py-4' style={{fontFamily:"Caveat, cursive", fontSize:"3rem", color:"#f9a8d4"}}>Incontra il nostro team</h1>
      <div className='flex justify-center h-[40rem] mb-16'>
        <img src={team} alt="team" className='object-contain rounded-xl border-solid border-2 border-[#f9a8d4]' />
      </div>
      <Footer />
    </div>
  )
}

export default Team