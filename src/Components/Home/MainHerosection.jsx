import React from 'react';
import img from '../../assets/establised.svg';

const MainHerosection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Text section */}
      <div className="order-2 lg:order-1 lg:flex flex-col lg:w-1/2 items-start">
        <h2
          className="text-[#005447] text-[32px] lg:text-[56px] font-bold tracking-[1.12px] leading-tight"
        >
          Halal Certification & Compliance
        </h2>
        <p className="text-[#313131] pt-3 text-xs lg:text-lg font-semibold uppercase tracking-wide whitespace-nowrap flex space-x-2">
          <span>STAY CLEAN</span>
          <span>|</span>
          <span>EAT GOOD</span>
          <span>|</span>
          <span>LIVE BETTER</span>
        </p>
      
        <div className="flex items-start pt-6 text-white text-[14px] font-semibold">
          <button className="px-[32px] py-[12px] rounded-lg border border-[#005447] bg-[#008F78]">
            View all services
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="order-1 lg:order-2 w-full lg:w-1/2">
        <img src={img} alt="img" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default MainHerosection;
