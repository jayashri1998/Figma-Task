import React from 'react';
import img from '../../assets/establised.svg';

const Herosection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1081px] items-center  justify-between space-y-4 ">
      {/* Image section */}
      <div className="order-1 lg:order-2 w-full lg:w-[500px] lg:h-[322px] shrink-0 lg:pl-8">
        <img src={img} alt="img" className="w-full h-full object-cover" />
      </div>

      {/* Text section */}
      <div className='flex-col space-y-6 lg:space-y-8 order-2 lg:order-1'>
        <div className="lg:flex flex-col lg:w-[517px] items-start -mb-1">
          <h2
            className="w-[300px] lg:w-[412px] text-[#005447] text-[32px] lg:text-[56px] font-bold tracking-[1.12px]"
            style={{ lineHeight: 'normal' }}
          >
            Our Services
            <p className="text-[#313131]  text-sm lg:text-base pt-[16px] font-normal">
              Giving opportunities for entrepreneurs to tap the global market of 2 Trillion.
            </p>
          </h2>      
        </div>
        <div className='flex  gap-2 lg:gap-4'>
        <div className='border border-[#88c7b6] rounded-xl  p-2 lg:p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[100px] min-h-[84px] max-w-[200px] lg:max-w-[149px] lg:h-[110px]'>
          <span className='font-merriweather font-bold text-sm lg:text-2xl'>2 Billion</span>
          <p className='font-sans text-xs lg:text-base font-normal'>People of<br/> halal market</p>
        </div>
        <div className='border border-[#88c7b6] rounded-xl p-2 lg:p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[110px] min-h-[84px] max-w-[200px] lg:max-w-[149px] lg:h-[110px]'>
          <span className='font-merriweather font-bold text-base lg:text-2xl'>200%</span>
          <p className='font-sans text-xs lg:text-base font-normal'>Profit of greater market share</p>
        </div>
        <div className='border border-[#88c7b6] rounded-xl  p-2 lg:p-4 text-[#005447] bg-[#E2EDDF] flex-1 min-w-[110px] min-h-[84px] max-w-[200px] lg:max-w-[149px] lg:h-[110px]'>
          <span className='font-merriweather font-bold text-base lg:text-2xl'>56+</span>
          <p className='font-sans text-xs lg:text-base font-normal'>OIC countries export gateway</p>
        </div>
      </div>
      

      
      </div>
    </div>
  );
}

export default Herosection;
