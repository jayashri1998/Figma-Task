import React from 'react';
import img5 from '../../assets/image5.png';

const HalalService = () => {
  return (
    <div className="mt-[60px] lg:mt-[120px] font-montserrat">
      <h2 className="text-[#005447] leading-6 lg:text-[32px] font-bold">
        Here’s What We Do
      </h2>
      <div className="flex flex-col lg:pt-3 lg:flex-row lg:justify-between gap-6 lg:gap-[116px]">
        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center items-center w-full lg:w-1/3">
          <img
            src={img5}
            alt="Halal Service"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="order-2 lg:order-1 lg:w-2/4">
          <p className="text-sm lg:text-base  xl:text-lg 2xl:text-xl leading-6 text-[#646464]">
            Halal India Research Council is an NGO registered in India under section 8 by the Ministry of Corporate Affairs for service-level activities. It provides Halal certificates for food, meat products, cosmetics, and pharmaceutical products and helps all logistics partners worldwide with its services.
          </p>
          <p className="pt-4 lg:pt-6 text-sm lg:text-base  xl:text-lg 2xl:text-xl leading-6 text-[#646464]">
            Halal is a term from the Quran that means “permitted” or “lawful”. Therefore, in relation to food, Halal is used for food and other consumables that are permissible for consumption and used by Muslims, based on Islamic law, the Shariah. Halal promotes cleanliness in all aspects of a person, and Halal foods ensure that food consumed by a person in their daily lives is clean, hygienic, and not detrimental to their health or well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HalalService;
