import React from 'react';
import img from '../../assets/establised.svg';

const Herosection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8 space-y-6 lg:space-y-0">
      {/* Image section */}
      <div className="order-1 lg:order-2 w-full lg:w-[50%] lg:pl-8">
        <img src={img} alt="img" className="w-full h-auto object-cover" />
      </div>

      {/* Text section */}
      <div className="order-2 lg:order-1 flex flex-col space-y-6 lg:space-y-8 w-full lg:w-[50%]">
        <div className="lg:w-full">
          <h2
            className="text-[#005447] text-[32px] lg:text-[56px] font-bold tracking-[1.12px]"
            style={{ lineHeight: 'normal' }}
          >
            Our Services
            <p className="text-[#313131] text-sm lg:text-base pt-[16px] font-normal leading-6">
              Giving opportunities for entrepreneurs to tap the global market of 2 Trillion.
            </p>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4">
          <div className="border border-[#88c7b6] rounded-xl p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[120px] max-w-[200px] lg:max-w-[149px] lg:h-[110px] overflow-hidden">
            <span className="font-merriweather font-bold text-sm lg:text-2xl block">2 Billion</span>
            <p className="font-sans text-xs lg:text-sm font-normal">People of<br /> halal market</p>
          </div>
          <div className="border border-[#88c7b6] rounded-xl p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[120px] max-w-[200px] lg:max-w-[149px] lg:h-[110px] overflow-hidden">
            <span className="font-merriweather font-bold text-sm lg:text-2xl block">200%</span>
            <p className="font-sans text-xs lg:text-sm font-normal">Profit of greater market share</p>
          </div>
          <div className="border border-[#88c7b6] rounded-xl p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[120px] max-w-[200px] lg:max-w-[149px] lg:h-[110px] overflow-hidden">
            <span className="font-merriweather font-bold text-sm lg:text-2xl block">56+</span>
            <p className="font-sans text-xs lg:text-sm font-normal">OIC countries export gateway</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
