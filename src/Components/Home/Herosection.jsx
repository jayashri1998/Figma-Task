import React from 'react'
import img from '../../assets/establised.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/image5.png'
import img6 from '../../assets/image6.png'
import img7 from '../../assets/image7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import contact from '../../assets/contact-us.svg'
const Herosection = () => {
  return (
    <div className='px-[100px] py-[140px]'>
    <div className='lg:inline-flex flex-col items-start gap-[120px]'> 
    <div className='flex w-[1081px] items-center gap-[128px]'>
    <div className='lg:flex flex-col w-[517px] items-start gap-[16px]'>
      <h2 className='w-[447px] h-[207px] text-[#005447] font-montserrat text-[56px] font-bold leading-normal tracking-[1.12px]'>
        Halal Certification & Compliance
      </h2>
      <p className="text-[#313131] font-montserrat text-[18px] font-medium leading-[24px] tracking-[3.6px] uppercase whitespace-nowrap pt-6">
        <span>STAY CLEAN</span>
        <span className='mx-2'>|</span>
        <span>EAT GOOD</span>
        <span className='mx-2'>|</span>
        <span>LIVE BETTER</span>
      </p>
      <div className="flex flex-col items-start gap-[32px] text-[#FFF] font-montserrat text-[14px] font-semibold leading-[24px]">
        <button className="flex px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-[#005447] bg-[#008F78]">
          View all services
        </button>
      </div>
    </div>
    <div className='w-[500px] h-[322px] shrink-0 lg:pl-8 '>
      <img src={img} alt='img' className='w-full h-full object-cover'/>
    </div>
  </div>
  
    </div>
    <div className='mt-[120px]'>
    
    <h2 className='text-[#005447]  text-[32px] font-bold'>Global Accreditations</h2>
    <p className='py-3 text-base font-normal text-[#646464]'>Accreditation is a formal, independent verification that a program or institution meets established quality standards and is competent to carry out specific conformity assessment tasks</p>
    <div className='mt-6 flex gap-6'>
    <div className='bg-white rounded-xl pl-[36px] pr-[37px] pt-9 py-[37px]   '>
   <img src={img1} alt='img1' className='w-[187px] h-[187px]'/>
    </div>
    <div className='bg-white rounded-xl pl-[36px] pr-[37px] pt-9 py-[37px]   '>
    <img src={img2} alt='img1' className='w-[187px] h-[187px]'/>
     </div>
     <div className='bg-white rounded-xl pl-[36px] pr-[37px] pt-9 py-[37px]   '>
    <img src={img3} alt='img1' className='w-[187px] h-[187px]'/>
     </div>
     <div className='bg-white rounded-xl pl-[36px] pr-[37px] pt-9 py-[37px]   '>
    <img src={img4} alt='img1' className='w-[187px] h-[187px]'/>
     </div>
    </div>
    </div>
    <div className='mt-[120px] flex justify-between gap-[116px] '>
    <div className=' w-[528px]'>
    <h2 className='text-[#005447]  text-[32px] font-bold'>Here’s What we do</h2>
    <p className='py-3 text-base font-normal text-[#646464]'>
    Halal India Research Council is a NGO registered in India under section 8 by the Ministry of Corporate Affairs for service level activities. Which is providing Halal certificates for food, meat products, cosmetics and pharmaceutical products. Helps to all logistics partners world wide by its services.</p>
    <p className='py-3 text-base font-normal text-[#646464]'>
    Halal is a term from the Quran that means “permitted” or “lawful”. Therefore, in relation to food, Halal is used for food and other consumables that are permissible for consumption and used by Muslims, based on Islamic law, the Shariah. Halal promotes cleanliness in all aspects of a person and halal foods ensure that food consumed by a person in their daily lives are clean, hygienic and not detrimental to their health or well-being.</p>
    </div>
    <div className=' my-9'>
    <img src={img5} alt='img5' className='w-[436px] h-[272px]  rounded-xl '/>
    </div>
    </div>
    <div className='mt-[120px]'>
    <h2 className='text-[#005447] text-[32px] font-bold font-montserrat leading-normal tracking-[0.64px]'>
      Upcoming Events
    </h2>
    <div className='flex flex-wrap gap-6 pt-6'>
    <div >
    <img src={img6} alt='img1' className='w-[252px] h-[168px] rounded-t-xl'/>
    <div className='text-sm bg-white text-[#646464] rounded-b-xl p-4 w-[252px]'>
    <h3 className='text-base font-bold text-[#111111] '>Society Interaction</h3>
    <p className='text-base font-normal text-[#646464]'>Basic Level interaction with elder generation peoples for society empowerment.
    </p>
    <a href='/' className='text-[#008F78] font-semibold text-base flex pt-4'>View more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812" stroke="#008F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> </a>
    </div>
    <p className='text-xl'></p>

-
    </div>
    <div >
    <img src={img7} alt='img1' className='w-[252px] h-[168px] rounded-t-xl'/>
    <div className='text-sm bg-white text-[#646464] rounded-b-xl p-4 w-[252px]'>
    <h3 className='text-base font-bold text-[#111111] '>School & College Meetup</h3>
    <p className='text-base font-normal text-[#646464]'>Visiting younger generation to meet their needs and requirements.
    </p>
    <a href='/' className='text-[#008F78] font-semibold text-base flex pt-4'>View more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812" stroke="#008F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> </a>
    </div>
    <p className='text-xl'></p>

-
    </div>
    <div >
    <img src={img8} alt='img1' className='w-[252px] h-[168px] rounded-t-xl'/>
    <div className='text-sm bg-white text-[#646464] rounded-b-xl p-4 w-[252px]'>
    <h3 className='text-base font-bold text-[#111111] '>End Hunger Program</h3>
    <p className='text-base font-normal text-[#646464]'>Stop hunger everyday with hand to hand effect. Day to Day visit to city.
    </p>
    <a href='/' className='text-[#008F78] font-semibold text-base flex pt-4'>View more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812" stroke="#008F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> </a>
    </div>
    <p className='text-xl'></p>

-
    </div>
    <div >
    <img src={img9} alt='img1' className='w-[252px] h-[168px] rounded-t-xl'/>
    <div className='text-sm bg-white text-[#646464] rounded-b-xl p-4 w-[252px]'>
    <h3 className='text-base font-bold text-[#111111] '>Celebrating leader’s day</h3>
    <p className='text-base font-normal text-[#646464]'>Celebrating elder leaders day to empower peoples all over the world.
    </p>
    <a href='/' className='text-[#008F78] font-semibold text-base flex pt-4'>View more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812" stroke="#008F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> </a>
    </div>
    <p className='text-xl'></p>

-
    </div>
    </div>

</div>
<div className='mt-[120px] '>
   
<h2 className='text-[#005447]  text-[32px] font-bold'>Contact Us</h2>
<p className='py-3 text-base font-normal text-[#646464]'>Please fill out the form and we reach out to you soon</p>
<div className='bg-white mt-4 rounded-xl p-10'>
 <div className='flex gap-10'>
 <div className="flex-col flex ">
 <label htmlFor="your name" className="text-[#646464] font-semibold text-base">Your Full Name</label>
 <input type="text" className="flex w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] items-center gap-[10px] text-[#9A9A9A] rounded" placeholder="Enter full name"/>
 <label htmlFor="your name" className="text-[#646464] font-semibold  mt-4 text-base">Your Email</label>
 <input type="text" className="flex w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] items-center gap-[10px] text-[#9A9A9A] rounded" placeholder="Enter Email"/>
 <label htmlFor="your name" className="text-[#646464] font-semibold  mt-4 text-base">Contact Number</label>
 <input type="text" className="flex w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] items-center gap-[10px] text-[#9A9A9A] rounded" placeholder="Enter full name"/>
 <label htmlFor="your name" className="text-[#646464] font-semibold  mt-4 text-base">Leave a message</label>
 <input type="text" className="flex w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] items-center gap-[10px] text-[#9A9A9A] rounded" placeholder="Type here"/>
 <label htmlFor="your name" className="text-[#646464] font-semibold  mt-4 text-base">Enquiry for</label>
 <input type="text" className="flex w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] items-center gap-[10px] text-[#9A9A9A] rounded" placeholder="Enter Contact Number"/>
 <button className='flex mt-8 rounded-xl text-sm font-semibold w-[400px] p-[12px_32px] justify-center items-center gap-[10px] bg-[#008F78]'> Submit
 </button>
</div>
<div className='w-[561px] h-[544px] bg-[#DAEAD4CC] rounded-xl'>
<img src={contact} alt='contact-us' className=' py-[58.19px] px-[59.79px]' />
</div>

 </div>
</div>
</div>
    </div>
  )
}

export default Herosection
