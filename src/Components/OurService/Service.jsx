import ContactUs from "../Home/ContactUs";
import Herosection from "./Herosection";
import OurObjective from "./OurObjective";
import Ourprocess from "./OurProcess";
import OurService from "./OurService";

const Service = () => {
  return (
    <div className='bg-[#F0F6EE]  p-2 lg:px-[100px] lg:py-[140px] font-montserrat'>

  
  <Herosection/>

    <OurService/>
<OurObjective/>
<Ourprocess/>
<ContactUs/>
    </div>
  )
}

export default Service;
