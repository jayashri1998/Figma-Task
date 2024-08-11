import React from 'react';
import img from '../../assets/search-normal.svg';

const Herosection = () => {
  return (
    <div className="flex flex-col px-4 lg:px-[100px] lg:flex-row items-center justify-center ">
      {/* Text section */}
      <form className= " bg-white max-w-md mx-auto lg:mt-[100px] lg:mb-[144px] mt-5  w-full lg:w-[527px] shadow-lg rounded-xl">
       
        <div className="flex gap-4 p-4">
          <button className=" inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src={img} alt='search' className='w-6 h-6'/>
          </button>
          <input 
            type="search" 
            id="default-search" 
            className="text-base font-normal lg:w-[527px] font-sans " 
            placeholder="Search for companies / products / services" 
            required 
          />
        
        </div>
      </form>
    </div>
  );
};

export default Herosection;
