import React from 'react';
import PromoVideo from '../assets/summer.mp4'

function HeroBanner() {
  return (
    <div className='w-[100%] h-[32rem] overflow-hidden'>
        <video src={PromoVideo} autoPlay loop muted className='object-contain'></video>
    </div>
  )
}

export default HeroBanner