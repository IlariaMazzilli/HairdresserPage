import React from 'react';
import beCool from '../assets/BeCool.png';
import Logo from '../assets/hairLogo.png';
import firstHair from '../assets/firstHair.png';
import secondHair from '../assets/secondHair.png';
import weddingHair from '../assets/weddingHair.png';
import Everyday from '../assets/Everyday.png';
import Afro from '../assets/afro.png';
import Special from "../assets/special.png"

function HairStylesSection() {
    return (
        <>
            {/* titolo */}
            <div className='w-[100%] h-[18rem] overflow-hidden '>
                <img src={beCool} alt="Be cool, be you" className='object-contain w-full h-full' />
            </div>
            {/* descrizioni hairstyles */}
            <div className='flex flex-col gap-8'>
                {/* primo hairstyle */}
                <div className='w-[100%] h-[18rem] overflow-hidden flex justify-center'>
                    <img src={firstHair} alt="HairLogo" className='object-contain w-[40%] h-full' />
                    <img src={Everyday} alt="EverydayStyle" className='w-[30%]' />
                </div>
                {/* secondo hairstyle */}
                <div className='w-[100%] h-[18rem] overflow-hidden flex justify-center'>
                    <img src={Afro} alt="EverydayStyle" className='w-[30%]' />
                    <img src={secondHair} alt="Afro hairstyles" className='object-contain w-[40%] h-full' />
                </div>
                {/* terzo hairstyle */}
                <div className='w-[100%] h-[18rem] overflow-hidden flex justify-center'>
                    <img src={weddingHair} alt="HairLogo" className='object-contain w-[40%] h-full' />
                    <img src={Special} alt="Occasioni speciali" />
                </div>
            </div>
        </>
    )
}

export default HairStylesSection