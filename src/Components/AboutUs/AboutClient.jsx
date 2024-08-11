import React from "react";
import img5 from "../../assets/image5.png";

const AboutClient = () => {
  return (
    <div className="mt-[60px] lg:mt-[120px] font-montserrat">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[116px]">
        <div className="order-2 lg:order-1 leading-6  shrink-0 lg:w-[528px]">
          <p className=" text-sm lg:text-base font-normal text-[#646464]">
            Halal is a term from the Quran that means “permitted” or “lawful”.
            Therefore, in relation to food, Halal is used for food and other
            consumables that are permissible for consumption and used by
            Muslims, based on Islamic law, the Shariah. Halal promotes
            cleanliness in all aspects of a person and halal foods ensure that
            food consumed by a person in their daily lives are clean, hygienic
            and not detrimental to their health or well-being.
          </p>
          <p className="pt-4 lg:pt-3 text-sm lg:text-base leading-6 lg:font-normal text-[#646464]">
            Having a halal certification ensures that the food product is deemed
            safe for consumption and with rising awareness about Halal foods,
            more and more businesses are seeking Halal Certification for their
            products, premises, restaurants, etc., Rather than, Halal India
            focuses in society development work with Colleges for regualr
            students interaction about shariah, and for society property
            dividend advice, Talaq advisory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
