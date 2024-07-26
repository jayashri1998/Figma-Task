import img from "../../assets/image9.png";
const Navbar = () => {
  return (
    <>
    <div className=" w-[1280px] inline-flex px-[100px] py-[12px] flex-col items-start gap-[10px] bg-[#FFF]  ">

  <div className="flex w-[1080px] justify-between items-center">
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
        <div className="flex px-[10px] py-[8px] justify-center items-center gap-[16px]">
          <span className="  text-[#000] font-montserrat text-[14px] font-normal leading-[24px]"> Our Clients</span>
          <span className="  text-[#000] font-montserrat text-[14px] font-normal leading-[24px]">Services</span>
          <span className="  text-[#000] font-montserrat text-[14px] font-normal leading-[24px]">About us</span>
          <span className="  text-[#000] font-montserrat text-[14px] font-normal leading-[24px]">Community</span>
        </div>
        <button className="flex w-[120px] h-[40px] px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[4px] border border-[#005447] bg-[#008F78] font-montserrat text-[16px] font-semibold leading-normal">
         Login
        </button>
        </div>
      </div>
      </div>

    </>
  );
};

export default Navbar;