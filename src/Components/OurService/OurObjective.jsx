import React from 'react';
import img5 from '../../assets/img5.svg';

const OurObjective = () => {
  return (
    <div className="mt-[60px] lg:mt-[120px] font-montserrat">
      <h2 className="text-[#005447] text-wrap justify-normal text-lg lg:text-[32px] font-bold">
        Our Objective
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[50px] mt-6 lg:mt-10">
        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center items-center w-full lg:w-[50%]">
          <img src={img5} alt="Halal Service" className="w-full h-auto rounded-xl" />
        </div>

        {/* Text Section */}
        <div className="order-2 lg:order-1 leading-6 w-full lg:w-[50%]">
          <div className="text-sm lg:text-base font-normal text-[#646464]">
            <span className="text-[#313131] w-full font-semibold text-sm lg:text-base block">
              The objects for which the council is established are:
            </span>
            <ul className="list-disc text-justify px-5 space-y-6 mt-6">
              <li>
                To help alleviate poverty by enabling access to the basic necessities of life
                including clean, safe and nutritious food, clean and safe drinking water, shelter,
                education, and livelihoods for people deprived from such access.
              </li>
              <li>
                To advise/identify/certify the clean and safe Food & Better Lifestyle for society
                with mindful encouragement.
              </li>
              <li>
                To globalize the idea of clean lifestyle including food, wealthy lifestyle for all
                humans.
              </li>
              <li>
                To promote social welfare activities intended for the general welfare of the public
                such as welfare of the destitute, family, women, children, and the handicapped, and
                assistance in cases of unemployment, underemployment, old age, sickness,
                disablement, and other cases of deserving needs. Promote social, cultural, sports,
                health, and recreational activities and bring to mainstream ST, SC, OBC &
                Minorities, enabling them to participate in the development process in an equitable
                manner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
