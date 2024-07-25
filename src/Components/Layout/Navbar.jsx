import img from "../../assets/image9.png";
const Navbar = () => {
  return (
    <>
      <div className="bg-white mx-[100px] py-3 flex items-center  justify-between">
        <div className="flex  w-[1080px]">
          <img src={img} alt="images" className="w-12 h-12" />
          <div className="flex mx-6 w-[368px] border  py-2 px-2.5 rounded-lg bg-[#F9FAFC] items-center">
          
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
        <div className="flex gap-4 w-full ">
        <div className="flex  mx-auto gap-4 py-2 px-2.5 font-normal text-sm text-black">
          <span className=" py-2 px-2.5 font-normal text-sm text-black"> Our Clients</span>
          <span className=" py-2 px-2.5 font-normal text-sm text-black">Services</span>
          <span className=" py-2 px-2.5 font-normal text-sm text-black">About us</span>
          <span className=" py-2 px-2.5 font-normal text-sm text-black">Community</span>
        </div>
        <button className="flex rounded bg-[#008F78] border-[#005447] text-white py-3 px-8 font-semibold text-base ">
         Login
        </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
