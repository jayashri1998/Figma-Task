import React from 'react';
import img from '../../assets/image9.png';


const Footer = () => {
  return (
  
      < div className=''>
      <div className="w-full bg-[#002721] p-3">
      <div className="lg:flex mx-auto max-w-screen-lg px-2 lg:px-4  lg:justify-between flex-col lg:flex-row">
        <span className="text-[#FFF] py-[24px] text-center justify-center flex lg:text-left text-[16px] font-normal lg:leading-[24px]">
          Subscribe and stay up-to-date on the latest news and upcoming events
        </span>
        <div className="bg-white my-[16px] w-full sm:w-[300px] border border-gray-800 flex rounded-full px-4 lg:px-6 lg:w-auto">
          <input
            name="email"
            id="email"
            placeholder="Enter email address"
            className="text-[#313131] w-full lg:w-auto flex-grow lg:flex-grow-0"
          />
          <button className="text-white text-sm font-semibold rounded-full   lg:mx-0 px-4 my-[8px] bg-[#008F78] border-[#005447]">
            Subscribe
          </button>
        </div>
      </div>
  
    
        </div>

    
      <footer className="bg-[#014439]  pt-6 px-4 pb-3 lg:px-[100px] lg:pt-[65px] lg:pb-[48px]">

        <div className="lg:flex justify-between items-start lg:w-[1080px] lg:h-[168px] gap-[275px]">
          <div className="mb-6 md:mb-0">
            <img src={img} alt="img" className="h-[89px] w-[93px]" />
          </div>
          <div className="lg:flex flex-grow justify-end space-y-[40px] lg:space-y-0 lg:gap-14 ">
          <div className="flex flex-col gap-[16px]">
          <h2 className="text-lg lg:text-base font-bold text-white">Menu</h2>
          <ul className="font-medium text-base text-[#DADADA] space-y-[16px]">
            <li>
              <a href="https://flowbite.com/" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">About us</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">Community</a>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-[16px] ">
        <h2 className="text-base font-bold text-white">Information</h2>
        <ul className="font-medium text-base text-[#DADADA] space-y-[16px]">
          <li>
            <a href="https://github.com/themesberg/flowbite" className="hover:underline  whitespace-nowrap">Privacy policy</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline  whitespace-nowrap">Terms & condition</a>
          </li>
        </ul>
      </div>
      
            <div className="flex flex-col gap-[16px]">
            <h2 className="text-base font-bold text-white">Contact us</h2>
            <ul className="font-medium text-base text-[#DADADA] space-y-[16px]">
              <li>
                <a href="#" className="hover:underline">919 EVR Periyar Salai 1st Lane Purasawalkam Chennai - 84 Tamil Nadu, India</a>
              </li>
              <li>
                <a href="#" className="hover:underline">inquiry.hirc@gmail.com</a>
              </li>
              <li>
                <a href="#" className="hover:underline">+91 9790 777 220</a>
              </li>
            </ul>
          </div>
          
          </div>
          <div className="block lg:hidden mt-[40px] flex flex-shrink-0 bg-[#002D26]  justify-center items-center">
        <span className="text-[#DADADA] font-sans text-[12px] text-center font-medium leading-[24px]">
          Copyright © halalindia
        </span>
      </div>
        </div>
     
      </footer>
      <div className="hidden lg:block w-[1280px] h-[40px] py-2 flex-shrink-0 bg-[#002D26]  ">
  <span className="text-[#DADADA] font-sans text-[12px] flex text-center justify-center items-center font-medium leading-[24px]">
    Copyright © halalindia
  </span>
</div>

    </div>
  );
}

export default Footer;
