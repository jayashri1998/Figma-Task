import React, { useState } from 'react';
import contact from '../../assets/contact-us.svg';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSVGClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setInputValue(option);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedValue('');
  };

  return (
    <div className="mt-[60px] lg:mt-[120px] lg:space-y-0 font-montserrat">
      <h2 className="text-[rgb(0,84,71)] text-xl lg:text-[32px] font-bold">Contact us</h2>
      <p className="pt-4 lg:pt-3 text-sm lg:pb-4 lg:text-base xl:text-lg lg:font-normal text-[#646464]">
        Please fill out the form and we will reach out to you soon
      </p>
      <div className="lg:bg-white mt-6 lg:mt-[16px] rounded-xl lg:p-10">
        <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-between">
          <div className="order-1 lg:order-2 py-6 lg:py-0 w-full lg:w-[50%] bg-[#DAEAD4CC] rounded-xl">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-auto object-cover lg:object-contain"
            />
          </div>

          <div className="order-2 lg:order-1 mt-6 lg:mt-1 flex flex-col space-y-4 w-full lg:w-[50%]">
            {/* Form Fields */}
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="fullName"
                className="text-[#646464] font-medium text-sm lg:font-semibold lg:text-base"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full lg:w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] text-[#9A9A9A] rounded"
                placeholder="Enter full name"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-[#646464] font-medium text-sm lg:font-semibold lg:text-base"
              >
                Your Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full lg:w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] text-[#9A9A9A] rounded"
                placeholder="Enter Email"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="contactNumber"
                className="text-[#646464] font-medium text-sm lg:font-semibold lg:text-base"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                className="w-full lg:w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] text-[#9A9A9A] rounded"
                placeholder="Enter contact number"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="text-[#646464] font-medium text-sm lg:font-semibold xl:text-base"
              >
                Leave a Message
              </label>
              <input
                type="text"
                id="message"
                className="w-full lg:w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] text-[#9A9A9A] rounded"
                placeholder="Type here"
              />
            </div>

            {/* SVG Dropdown Section */}
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="enquiryFor"
                className="text-[#646464] font-medium text-sm lg:font-semibold lg:text-base"
              >
                Enquiry For
              </label>
              <div className="relative">
                <div className="flex items-center w-full lg:w-[340px] h-[40px] p-[12px_14px_12px_12px] border border-[#DADADA] text-[#9A9A9A] rounded-md bg-white">
                  <input
                    type="text"
                    id="enquiryFor"
                    className="w-full lg:w-[280px] h-[24px] text-[#9A9A9A] focus:outline-none"
                    placeholder="Enter enquiry"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    onClick={handleSVGClick}
                    className="cursor-pointer ml-auto lg:ml-0"
                  >
                    <path
                      d="M5.78023 7.71875L4.71973 8.77928L11.9997 16.0592L19.2797 8.77928L18.2192 7.71875L11.9997 13.9382L5.78023 7.71875Z"
                      fill="#646464"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <div className="absolute z-10 mt-2 bg-white border border-[#DADADA] rounded-md w-full lg:w-[340px]">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className="flex mt-8 rounded-xl text-sm xl:text-base font-semibold lg:w-[400px] w-full p-[12px_32px] justify-center items-center lg:gap-[10px] bg-[#008F78] text-white border border-[#005447]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
