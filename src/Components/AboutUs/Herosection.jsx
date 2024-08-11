import React from 'react';
import img from '../../assets/establised.svg';

const Herosection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8">
      {/* Text section */}
      <div className="order-2 lg:order-1 flex flex-col items-start lg:w-[517px] flex-grow">
        <h2
          className="w-[268px] lg:w-[447px] text-[#005447] text-[32px] lg:text-[56px] font-bold tracking-[1.12px]"
          style={{ lineHeight: 'normal' }}
        >
          About Us
        </h2>
        <p className="text-[#313131] pt-4 font-normal text-base">
          Halal India Research Council is an NGO registered in India under section 8 by the Ministry of Corporate Affairs for service level activities. It provides Halal certificates for food, meat products, cosmetics, and pharmaceutical products. It also helps all logistics partners worldwide with its services.
        </p>
    
        <div className="flex flex-col items-start pt-6 lg:pt-[32px] text-[#FFF] text-[14px] font-semibold leading-[24px]">
          <button className="flex px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-[#005447] bg-[#008F78]">
            Contact Us
          </button>
        </div>
      </div>
    
      {/* Image section */}
      <div className="order-1 lg:order-2 w-full lg:w-auto lg:flex lg:justify-end lg:pl-8">
        <img src={img} alt="img" className="w-full h-full object-cover lg:max-w-[500px]" />
      </div>
    </div>
  );
};

export default Herosection;
