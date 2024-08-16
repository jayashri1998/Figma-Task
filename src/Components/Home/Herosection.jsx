import React from "react";

import MainHerosection from "./MainHerosection";
import ContactUs from "./ContactUs";
import Card from "./Card";
import HalalService from "./HalalService";
import SocialService from "./SocialService";
const Herosection = () => {
  return (
    <div className="  font-montserrat leading-6">
    <div className="px-3 py-3 lg:px-[100px] lg:py-[140px]">
      <MainHerosection />
      </div>
      <div>
      <Card />
      </div>
      <div className="px-3 py-3 lg:px-[100px] lg:py-[140px]">
      <HalalService />
      <SocialService />
      <ContactUs />
      </div>
    </div>
  );
};

export default Herosection;
