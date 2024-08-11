import React from "react";
import img from "../../assets/search-normal.svg";
import Logo1 from "../../assets/Logo.svg";
import Copy from "../../assets/copy.svg";
import ClientContactUs from "./ContactUs";
const ClientDetails = () => {
  return (
    <>
    <div className="lg:bg-gradient-to-r from-[#7FDBB4] to-[#8FD3F4]  pt-[20px] lg:pt-[21px] lg:pb-[38px] font-montserrat   lg:-mx-0">
    <div className="max-w-screen-lg mx-auto  lg:px-8">
      <form className="bg-white max-w-md mx-auto mt-5 w-full lg:w-[527px] shadow-lg rounded-xl">
        <div className="flex gap-4 p-4">
          <button className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img src={img} alt="search" className="w-6 h-6" />
          </button>
          <input
            type="search"
            id="default-search"
            className="text-base font-normal w-full font-montserrat"
            placeholder="Search for companies / products / services"
            required
          />
        </div>
      </form>
    </div>
  </div>
  
      <div className=" mt-10 space-y-4 w-full   lg:px-[100px] font-montserrat">
        <div className="bg-white border border-gray-50 rounded-lg p-4 flex  gap-6">
          <img src={Logo1} alt="Logo" />
          <h3 className="flex-col gap-[2px]">
            <div className="font-bold text-xl text-[#313131]">SavoryBites</div>
            <div>
              <a
                href="https://Savorybites.com"
                className="text-xs font-medium underline text-[#0072DA]"
              >
                https://Savorybites.com
              </a>
            </div>
          </h3>
        </div>
        <div className="bg-white border border-gray-50  rounded-lg pt-6 ">
          <span className="px-4  font-bold text-base text-[#313131]">
            Company Profile
          </span>
          <div className="mt-4 border-t ">
            <div className="mt-6 px-4">
              <div className="bg-[#F6F8FA] rounded-xl mb-4 py-6 px-4">
                <div className="lg:flex  space-y-6 lg:space-y-0 lg:gap-6">
                  <div className=" space-y-3 lg:w-[202px]">
                    <div className="text-sm font-medium font-montserrat text-[#9A9A9A]">
                      Certificate Status
                    </div>
                    <button className="px-[10px] text-xs font-semibold py-2 rounded text-white w-[84px] bg-[#0072DA]">
                      Active
                    </button>
                  </div>
                  <div className=" space-y-3 w-full lg:w-[339px]">
                    <div className="text-sm font-medium font-montserrat text-[#9A9A9A]">
                      Certificate Number
                    </div>
                    <span className=" flex font-medium w-full text-xl gap-2 leading-6 text-[#313131]  ">
                      076019 / 02082023 / 1010
                      <img src={Copy} alt="copyimg" />
                    </span>
                  </div>
                  <div className=" space-y-3 lg:w-[202px]">
                    <div className="text-sm font-medium font-montserrat text-[#9A9A9A]">
                      Date of Expiry
                    </div>
                    <div className="   text-[#CC3931]  font-medium text-lg  ">
                      01 Aug 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pt-6 lg:flex flex-col space-y-4  ">
                <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-6">
                  <div className="flex flex-col space-y-2 lg:w-[450px] ">
                    <span className="text-[#9A9A9A] ">
                      Company/Business Name
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      SavoryBite
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 lg:w-[704px]">
                    <span className="text-[#9A9A9A] text-sm font-medium">
                      Company/Business Name
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      SavoryBite
                    </p>
                  </div>
                </div>
                <div className=" space-y-4 lg:space-y-0 lg:flex lg:gap-6 ">
                  <div className="flex flex-col space-y-2 lg:w-[450px]">
                    <span className="text-[#9A9A9A]  font-medium  text-sm">
                      Registered Office Address
                    </span>
                    <p className="font-medium text-sm text-[#313131] ">
                      P Block, Anna Nagar, Chennai, Tamil{" "}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 lg:w-[704px]">
                    <span className="text-[#9A9A9A] text-sm  font-medium">
                      Line Address{" "}
                      <span className="text-xs font-normal text-[#0000]">
                        (Optional)
                      </span>
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      P Block, Anna Nagar, Chennai, Tamil{" "}
                    </p>
                  </div>
                </div>
                <div className=" space-y-4 lg:space-y-0 lg:flex lg:gap-6">
                  <div className="flex flex-col space-y-2 lg:w-[450px]">
                    <span className="text-[#9A9A9A]  font-medium  text-sm">
                      Country
                    </span>
                    <p className="font-medium text-sm text-[#313131] ">
                      India{" "}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 lg:w-[704px]">
                    <span className="text-[#9A9A9A] text-sm  font-medium">
                      State
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      Tamil Nadu{" "}
                    </p>
                  </div>
                </div>
                <div className=" space-y-4 lg:space-y-0 lg:flex lg:gap-6 ">
                  <div className="flex flex-col space-y-2 lg:w-[450px]">
                    <span className="text-[#9A9A9A]  font-medium  text-sm">
                      City
                    </span>
                    <p className="font-medium text-sm text-[#313131] ">
                      Chennai
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 lg:w-[704px]">
                    <span className="text-[#9A9A9A] text-sm  font-medium">
                      Zip Code{" "}
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      600001{" "}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-6">
                  <div className="flex flex-col space-y-2 lg:w-[450px]">
                    <span className="text-[#9A9A9A] font-medium text-sm">
                      Website URL
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      http://SavoryBite.com
                    </p>
                  </div>

                  <div className="flex flex-col space-y-2 lg:w-[704px]">
                    <span className="text-[#9A9A9A] text-sm font-medium">
                      Contact Number
                    </span>
                    <p className="font-medium text-sm text-[#313131]">
                      (+91) 9876-054598
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 px-4 pb-4 border-b font-bold text-[#313131] text-base w-full">
            Manufacturing Plant Profile
          </div>
          <div className="space-y-4 px-4 pt-6  lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">
                Plant Name
              </span>
              <p className="font-medium text-sm text-[#313131]">
                Protein manufacturing plant
              </p>
            </div>

            <div className="flex flex-col space-y-2 lg:w-[704px]">
              <span className="text-[#9A9A9A] text-sm font-medium">
                Contact Number
              </span>
              <p className="font-medium text-sm text-[#313131]">
                (+91) 9876-054598
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">
                Plant Address
              </span>
              <p className="font-medium text-sm text-warp text-[#313131]">
                7, Twenty Star Complex, 2nd line, Beach Rd
              </p>
            </div>

            <div className="flex flex-col space-y-2 lg:w-[704px]">
              <span className="text-[#9A9A9A] text-sm font-medium">
                Plant Line Address
              </span>
              <p className="font-medium text-wrap text-sm text-[#313131]">
                7, Twenty Star Complex, 2nd line, Beach Rd
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">
                Country
              </span>
              <p className="font-medium text-sm text-warp text-[#313131]">
                India
              </p>
            </div>

            <div className="flex flex-col space-y-2 lg:w-[704px]">
              <span className="text-[#9A9A9A] text-sm font-medium">State</span>
              <p className="font-medium text-wrap text-sm text-[#313131]">
                Tamil Nadu
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">City</span>
              <p className="font-medium text-sm text-warp text-[#313131]">
                Chennai
              </p>
            </div>

            <div className="flex flex-col space-y-2 lg:w-[704px]">
              <span className="text-[#9A9A9A] text-sm font-medium">
                Zip Code
              </span>
              <p className="font-medium text-wrap text-sm text-[#313131]">
                600004
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">Type</span>
              <p className="font-medium text-sm text-warp text-[#313131]">
                Trader/Exporter
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">
                Name of Industry
              </span>
              <p className="font-medium text-sm text-warp text-[#313131]">
                Other (Fitness food)
              </p>
            </div>
          </div>
          <div className="space-y-4 px-4 pt-6 pb-4 lg:space-y-0 lg:flex lg:gap-6">
            <div className="flex flex-col space-y-2 lg:w-[450px]">
              <span className="text-[#9A9A9A] font-medium text-sm">
              Certification & Standards of the plant              </span>
              <p className="font-medium text-sm text-warp text-[#313131]">
              Enter here              </p>
            </div>
          </div>
        </div>
           <ClientContactUs/>
      </div>
   
    </>
  );
};

export default ClientDetails;
