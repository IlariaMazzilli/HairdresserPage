import React from 'react';
import Navbar from '../components/Navbar';
import PriceList from "../assets/PriceList.png";
import Footer from '../components/Footer';

function Prices() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center my-8'>
              <img src={PriceList} alt="Listino prezzi" className='object-contain w-[60%] h-[100%]'/>  
            </div>
            <Footer/>
        </div>
    )
}

export default Prices