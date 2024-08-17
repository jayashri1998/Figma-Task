import React from 'react'
import Herosection from './Herosection'
import AboutClient from './AboutClient'
import ContactUs from '../Home/ContactUs'

const About = () => {
  return (
    <div className='bg-[#F0F6EE]  p-2 lg:px-[100px] lg:py-[140px] font-montserrat leading-6'>
   
 <Herosection/>
 
 <AboutClient/>
 <ContactUs/>
    </div>
  )
}

export default About
