import React from 'react';
import img from '../../assets/image9.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#002721]">
        <div className="lg:flex mx-auto max-w-screen-lg px-4 justify-between">
          <span className="text-[#FFF] py-[24px] font-montserrat text-[16px] font-normal leading-[24px]">
            Subscribe and stay up-to-date on the latest news and upcoming events
          </span>
          <div className="bg-white my-[16px] flex rounded-full px-4 gap-auto">
            <input name="email" id="email" placeholder="Enter email address" className="text-[#313131]" />
            <button className="text-white text-sm font-semibold rounded-full px-4 my-[8px] bg-[#008F78] border-[#005447]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[#014439]">
        <div className="flex justify-between items-start w-full mx-auto max-w-screen-lg px-4 py-8">
          <div className="mb-6 md:mb-0">
            <img src={img} alt="img" className="h-[89px] w-[93px]" />
          </div>
          <div className="flex flex-grow justify-end pl-[275px] gap-14 text-white">
            <div>
              <h2 className="mb-6 text-base font-bold text-white">Menu</h2>
              <ul className="  font-medium text-base gap-4 text-[#DADADA]">
                <li className="">
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
            <div className='w-[37%]'>
              <h2 className="mb-6 text-base font-bold text-white">Information</h2>
              <ul className="font-medium text-base gap-4 w-fit text-[#DADADA]">
                <li className="">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Privacy policy</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Terms & condition</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-bold text-white">Contact us</h2>
              <ul className="font-medium text-base gap-4 text-[#DADADA]">
                <li className="">
                  <a href="#" className="hover:underline">919 EVR Periyar Salai 1st Lane Purasawalkam Chennai - 84 Tamil Nadu, India</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">nquiry.hirc@gmail.com</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">+91 9790 777 220</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-[1280px] h-[40px] flex-shrink-0 bg-[#002D26] flex justify-center items-center">
  <span className="text-[#DADADA] font-montserrat text-[12px] text-center font-medium leading-[24px]">
    Copyright © halalindia
  </span>
</div>

    </>
  );
}

export default Footer;
