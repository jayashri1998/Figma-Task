import React from 'react'
import Herosection from './Herosection'
import AboutClient from './AboutClient'
import ContactUs from '../Home/ContactUs'

const About = () => {
  return (
    <div className='bg-[#F0F6EE]  p-3 lg:px-[100px] lg:py-[140px] font-sans'>
    <div className='lg:inline-flex flex-col items-start gap-[120px]'> 
 <Herosection/>
    </div>
 <AboutClient/>
 <ContactUs/>
    </div>
  )
}

export default About
