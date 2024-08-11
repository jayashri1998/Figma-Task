import React from 'react'




import MainHerosection from './MainHerosection'
import ContactUs from './ContactUs'
import Card from './Card'
import HalalService from './HalalService'
import SocialService from './SocialService'
const Herosection = () => {

  return (
    <div className=' px-3 py-3 lg:px-[100px] lg:py-[140px]'>
    <div className='lg:inline-flex flex-col items-start gap-[120px]'> 
  
  <MainHerosection/>
    </div>
    <Card/>
    <HalalService/>
    <SocialService/>
    <ContactUs/>
  
    </div>
  )
}

export default Herosection
