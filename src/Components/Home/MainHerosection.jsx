import React from 'react';
import img from '../../assets/establised.svg';

const MainHerosection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1081px] items-center space-y-4 lg:gap-[128px]">
      {/* Image section */}
      <div className="order-1 lg:order-2 w-full lg:w-[500px] lg:h-[322px] shrink-0 lg:pl-8">
        <img src={img} alt="img" className="w-full h-full object-cover" />
      </div>

      {/* Text section */}
      <div className="order-2 lg:order-1 lg:flex flex-col lg:w-[517px] items-start -mb-1">
        <h2
          className="w-[268px] lg:w-[447px] lg:h-[207px] text-[#005447]  text-[32px] lg:text-[56px] font-bold tracking-[1.12px]"
          style={{ lineHeight: 'normal' }}
        >
          Halal Certification & Compliance
        </h2>
        <p className="text-[#313131]  pt-3 text-xs lg:text-lg lg:pt-[16px] font-semibold lg:font-medium lg:leading-[24px] tracking-[3.6px] uppercase whitespace-nowrap flex space-x-1 lg:space-x-2">
        <span>STAY CLEAN</span>
        <span className="px-1 lg:px-1"> {/* Adjust px for spacing around the separator */}
          |
        </span>
        <span>EAT GOOD</span>
        <span className="px-1 lg:px-1"> {/* Adjust px for spacing around the separator */}
          |
        </span>
        <span>LIVE BETTER</span>
      </p>
      
        <div className="flex flex-col items-start pt-6 lg:pt-[32px] text-[#FFF] text-[14px] font-semibold leading-[24px]">
          <button className="flex px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-[#005447] bg-[#008F78]">
            View all services
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHerosection;
