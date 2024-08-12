import React from 'react';

const Header = () => {
  return (
    <>
    <div className='hidden lg:block flex w-full px-[10px] py-[8px] flex-col items-center gap-[10px] bg-[#002721] relative'>
  <div className="flex w-full">
    <div className="flex justify-center items-start gap-[24px] mx-auto">
      <div className="text-center text-[#FFF] font-montserrat text-[16px] font-medium leading-[24px] tracking-[0.32px]">
        <span>For Medical Tourism Assistance</span>
      </div>
      <a href="/" className="text-[#FFF] font-montserrat text-[16px] font-medium leading-[24px] tracking-[0.32px] underline">
        Click here
      </a>
    </div>

    <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2 flex items-center gap-[12px]">
      <div className="flex-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M10.4997 25.6693H17.4997C23.333 25.6693 25.6663 23.3359 25.6663 17.5026V10.5026C25.6663 4.66927 23.333 2.33594 17.4997 2.33594H10.4997C4.66634 2.33594 2.33301 4.66927 2.33301 10.5026V17.5026C2.33301 23.3359 4.66634 25.6693 10.4997 25.6693Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0003 18.0807C16.2555 18.0807 18.0837 16.2526 18.0837 13.9974C18.0837 11.7422 16.2555 9.91406 14.0003 9.91406C11.7452 9.91406 9.91699 11.7422 9.91699 13.9974C9.91699 16.2526 11.7452 18.0807 14.0003 18.0807Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.5751 8.16927H20.5886"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_356_55977)">
          <path
            d="M17.25 6H6.75C6.55109 6 6.36032 6.07902 6.21967 6.21967C6.07902 6.36032 6 6.55109 6 6.75V17.25C6 17.4489 6.07902 17.6397 6.21967 17.7803C6.36032 17.921 6.55109 18 6.75 18H17.25C17.4489 18 17.6397 17.921 17.7803 17.7803C17.921 17.6397 18 17.4489 18 17.25V6.75C18 6.55109 17.921 6.36032 17.7803 6.21967C17.6397 6.07902 17.4489 6 17.25 6ZM9.75 16.125H7.875V10.5H9.75V16.125ZM8.8125 9.75C8.59 9.75 8.37249 9.68402 8.18748 9.5604C8.00248 9.43679 7.85828 9.26109 7.77314 9.05552C7.68799 8.84995 7.66571 8.62375 7.70912 8.40552C7.75252 8.18729 7.85967 7.98684 8.017 7.8295C8.17434 7.67217 8.37479 7.56502 8.59302 7.52162C8.81125 7.47821 9.03745 7.50049 9.24302 7.58564C9.44859 7.67078 9.62429 7.81498 9.7479 7.99998C9.87152 8.18499 9.9375 8.4025 9.9375 8.625C9.9375 8.92337 9.81897 9.20952 9.608 9.4205C9.39702 9.63147 9.11087 9.75 8.8125 9.75ZM16.125 16.125H14.25V12.375C14.25 12.0637 13.83 11.8125 13.3125 11.8125C12.5625 11.8125 12.375 12.8137 12.375 13.125V16.125H10.5V10.5H12.375V11.8125C12.375 10.875 13.215 10.5 14.25 10.5C14.7473 10.5 15.2242 10.6975 15.5758 11.0492C15.9275 11.4008 16.125 11.8777 16.125 12.375V16.125Z"
            fill="white"
          />
          <path
            d="M19.5 1.5C20.2956 1.5 21.0587 1.81607 21.6213 2.37868C22.1839 2.94129 22.5 3.70435 22.5 4.5V19.5C22.5 20.2956 22.1839 21.0587 21.6213 21.6213C21.0587 22.1839 20.2956 22.5 19.5 22.5H4.5C3.70435 22.5 2.94129 22.1839 2.37868 21.6213C1.81607 21.0587 1.5 20.2956 1.5 19.5V4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H19.5ZM19.5 0H4.5C3.30759 0.00346273 2.16501 0.47868 1.32184 1.32184C0.47868 2.16501 0.00346273 3.30759 0 4.5L0 19.5C0.00346273 20.6924 0.47868 21.835 1.32184 22.6782C2.16501 23.5213 3.30759 23.9965 4.5 24H19.5C20.6924 23.9965 21.835 23.5213 22.6782 22.6782C23.5213 21.835 23.9965 20.6924 24 19.5V4.5C23.9965 3.30759 23.5213 2.16501 22.6782 1.32184C21.835 0.47868 20.6924 0.00346273 19.5 0Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_356_55977">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</div>

      </div>
 
</>
  );
};

export default Header;
