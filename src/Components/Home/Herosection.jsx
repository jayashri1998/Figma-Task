import React from "react";

import MainHerosection from "./MainHerosection";
import ContactUs from "./ContactUs";
import Card from "./Card";
import HalalService from "./HalalService";
import SocialService from "./SocialService";
const Herosection = () => {
  return (
    <div className=" px-2 py-2 lg:px-[100px] lg:py-[140px] font-montserrat leading-6">
      <MainHerosection />

      <Card />
      <HalalService />
      <SocialService />
      <ContactUs />
    </div>
  );
};

export default Herosection;
