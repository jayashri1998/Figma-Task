import React from 'react'
import imglogo from '../../assets/image9.png'
import profileimg from '../../assets/Image.svg'

const Navbar = () => {
  return (
    <div>
    <div className='bg-white w-full px-6 py-3 shadow-sm'>
    <div className='flex justify-between font-montserrat'>
    <div className='flex gap-16'>
    <div className="flex items-center gap-[10px]">
      <img src={imglogo} alt='img'/>
      <span className='text-[#005447] font-semibold '>Halal India</span>
    </div>
    <div className=' flex border px-[10px] gap-[10px] py-2 bg-[#FBFBFB] rounded-lg w-[368px] border-[#DFE3EC]' >
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 12C20.25 16.8325 16.3325 20.75 11.5 20.75C6.66751 20.75 2.75 16.8325 2.75 12C2.75 7.16751 6.66751 3.25 11.5 3.25C16.3325 3.25 20.25 7.16751 20.25 12Z" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22.5L20 20.5" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<input 
name='search'
type='text'
placeholder='Search for services'
className='text-[#9A9A9A] text-sm bg-[#FBFBFB]'
/>
    </div>
    </div>
    <div className='flex  gap-[37px]'>
    <div className='flex gap-4 items-center'>
    <span className='text-[#000000] text-sm'>About us
    </span>
    <span className='text-[#000000] text-sm'>Help
    </span>
    </div>
    <div className="flex items-center gap-3">
    <div className="flex flex-col items-end">
      <span className="text-right text-sm">Atif Khan</span>
      <p className="text-right text-[#797983] text-[10px] ">18 April 2022, 11:34 am</p>
    </div>
    <img src={profileimg} alt="img" />
  </div>
  
    </div>
      </div>
      </div>
      <hr/>
   
    </div>
   
  )
}

export default Navbar
