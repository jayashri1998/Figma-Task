import img from "../../assets/image9.png";
import img1 from "../../assets/search-normal.svg";
import img3 from "../../assets/User1.svg";
import logo from "../../assets/image9.png";
import close from "../../assets/close-circle.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const toggleOpen = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div className=" hidden lg:block w-full inline-flex px-[100px] py-[12px] flex-col items-start gap-[10px] bg-[#FFF]  ">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-[473px] items-center gap-[24px] flex-shrink-0">
            <img src={img} alt="images" className="w-[46px] h-12" />
            <div className="flex w-[368px] px-[10px] py-[8px] items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#DFE3EC] bg-[#F9FAFC] text-[#9A9A9A] font-montserrat text-[14px] font-normal leading-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#9A9A9A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#9A9A9A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="search"
                placeholder="Search for services"
                className="font-normal text-sm ml-2 flex-grow text-[#9A9A9A] bg-[#F9FAFC]"
              />
            </div>
          </div>
          <div className="flex items-start gap-[16px] ">
          <div className="flex justify-center items-center gap-[16px]">
          <NavLink 
            to='/ourclient' 
            className={({ isActive }) => 
              `px-[10px] py-[8px] font-montserrat text-sm font-normal leading-[24px] ${isActive ? 'text-[#008F78]' : 'text-[#000000]'}`
            }
          >
            Our Clients
          </NavLink>
        
          <NavLink 
            to='/ourservices' 
            className={({ isActive }) => 
              `px-[10px] py-[8px] font-montserrat text-sm font-normal leading-[24px] ${isActive ? 'text-[#008F78]' : 'text-[#000000]'}`
            }
          >
            Services
          </NavLink>
        
          <NavLink 
            to='/about' 
            className={({ isActive }) => 
              `px-[10px] py-[8px] font-montserrat text-sm font-normal leading-[24px] ${isActive ? 'text-[#008F78]' : 'ttext-[#000000]'}`
            }
          >
            About us
          </NavLink>
        
          <NavLink 
            to='/community' 
            className={({ isActive }) => 
              `px-[10px] py-[8px] font-montserrat text-[14px] font-normal leading-[24px] ${isActive ? 'text-[#008F78]' : 'text-[#000000]'}`
            }
          >
            Community
          </NavLink>
        </div>
            <Link to='/login' className="flex w-[120px] h-[40px] px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[4px] border border-[#005447] bg-[#008F78]  text-[16px] font-semibold text-white leading-normal  ">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full max-h-screen bg-white">
        <div className="flex justify-between items-center p-4 lg:hidden">
          <div onClick={toggleOpen} className="cursor-pointer">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.14286 2.28571H17.1429C17.8286 2.28571 18.2857 1.82857 18.2857 1.14286C18.2857 0.457143 17.8286 0 17.1429 0H1.14286C0.457143 0 0 0.457143 0 1.14286C0 1.82857 0.457143 2.28571 1.14286 2.28571ZM1.14286 9.14286H17.1429C17.8286 9.14286 18.2857 8.68571 18.2857 8C18.2857 7.31429 17.8286 6.85714 17.1429 6.85714H1.14286C0.457143 6.85714 0 7.31429 0 8C0 8.68571 0.457143 9.14286 1.14286 9.14286ZM1.14286 16H17.1429C17.8286 16 18.2857 15.5429 18.2857 14.8571C18.2857 14.1714 17.8286 13.7143 17.1429 13.7143H1.14286C0.457143 13.7143 0 14.1714 0 14.8571C0 15.5429 0.457143 16 1.14286 16Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="flex gap-6 items-center relative ">
            <div className="flex items-center">
              <button
                onClick={toggleInputVisibility}
                className="focus:outline-none"
              >
                <img src={img1} alt="img" />
              </button>
              {isInputVisible && (
                <input
                  type="text"
                  className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                />
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropDown}
                className="focus:outline-none"
              >
                <img src={img3} alt="Profile" />
              </button>
              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toggle Menu */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isToggle ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-white w-[276px] shadow-lg z-20 h-[376px]`}
        >
          <div className="">
            <div className="flex justify-between px-[10px] py-4">
              <img src={logo} alt="logo" />
              <button
                onClick={toggleOpen}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <img src={close} alt="close" />
              </button>
            </div>
            
         
            <nav className="space-y-4">
            <Link to="/" className="block w-full bg-[#008F78]">
            <span className="block p-[10px] w-full text-white font-semibold text-base">
              Home
            </span>
          </Link>
          <Link to="/ourclient" className="block text-[#313131] font-normal text-base">
          <span className="p-[10px] block">Our Client</span>
          <div className="border-t border-gray-300"></div>
        </Link>
        
        <Link to="/ourservices" className="block text-[#313131] font-normal text-base">
        <span className="p-[10px] block">Services</span>
        <div className="border-t border-gray-300"></div>
      </Link>
      <Link to="/about" className="block text-[#313131] font-normal text-base">
      <span className="p-[10px] block">About us</span>
      <div className="border-t border-gray-300"></div>
    </Link>
    <Link to="/comm" className="block text-[#313131] font-normal text-base">
    <span className="p-[10px] block">Community</span>
    
  </Link>
    
      
            </nav>
          </div>
        </div>
        {isToggle && (
          <div
            className="fixed inset-0 bg-[#ABABAB] bg-opacity-30 z-10"
            onClick={toggleOpen}
          ></div>
        )}
      </div>

    </>
  );
};

export default Navbar;
