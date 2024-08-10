import {useState} from 'react'
import img1 from '../../assets/Service1.svg';
import img2 from '../../assets/Service2.svg';
import img3 from '../../assets/Service3.svg';


const OurService = () => {

  

  const images = [
    {id:1, image:img2, title:'Medical Tourism Assistance in India'}, 
    {id:2, image:img1, title:'Halal Certificate'},
    {id:3, image:img3, title:'Member Enrolment'},
    {id:4, image:img2, title:'Medical Tourism Assistance in India'}

  ]

 
  return (
    <div className='mt-[60px] lg:mt-[120px] overflow-hidden font-sans'>
    <h2 className='text-[#005447] text-xl lg:text-[32px] font-bold'>Services</h2>
    <p className='pt-4 lg:pt-3 text-sm text-justify lg:text-base font-medium lg:font-normal text-[#646464]'>
    We provide services to help alleviate poverty by enabling access to the basic necessities of life including clean, safe and nutritious food, clean and safe drinking water, shelter, education and livelihoods for people deprived from such access.
    </p>

    {/* Card Container */}
    <div className='mt-6 grid grid-cols-2 gap-[20px]  w-full max-w-full lg:grid-cols-4 lg:gap-6'>
    {images.map((image, index) => (
      <div key={index} className='relative w-full  rounded-lg overflow-hidden'>
        <img src={image.image} alt='img' className='object-cover   transition-transform duration-300 ease-in-out transform hover:scale-110' />

        {/* Title Overlay */}
        <div className='absolute bottom-0 w-full bg-opacity-50 p-[30px_27px_12px_12px]'>
          <h1 className='text-white text-base font-bold'>
            {image.title}
          </h1>
        </div>
      </div>
    ))}
  </div>

  </div>
  )
}

export default OurService;
