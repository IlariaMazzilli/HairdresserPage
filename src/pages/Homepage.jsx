import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import HairStylesSection from '../components/HairStylesSection'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <HairStylesSection/>
        <Footer/>
    </div>
  )
}

export default Homepage