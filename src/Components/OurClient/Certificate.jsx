import React, { useState, useRef } from "react";
import Logo1 from "../../assets/Logo.svg";
import Active from "../../assets/Active.svg";
import Logo2 from "../../assets/Rectangle1.svg";
import Logo3 from "../../assets/Rectangle2.svg";
import Logo4 from "../../assets/Rectangle3.svg";
import Logo5 from "../../assets/Rectangle4.svg";
import Logo6 from "../../assets/Rectangle5.svg";
import Logo7 from "../../assets/Rectangle6.svg";
import { Link } from "react-router-dom";
import  MobileNav  from "../../assets/mobileActiev.svg"
const content = [
  {
    id: 1,
    img: Logo1,
    company_name: "Savorybites",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 2,
    img: Logo2,
    company_name: "Adani Total Gas Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "Decorative goods",
  },
  {
    id: 3,
    img: Logo3,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 4,
    img: Logo4,
    company_name: "Adani Total Gas Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 5,
    img: Logo5,
    company_name: "Avenue Supermarts Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo6,
    company_name: "Adani Total Gas Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "Decorative goods",
  },
  {
    id: 7,
    img: Logo7,
    company_name: "Asian Paints Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "Decorative goods",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 7,
    img: Logo7,
    company_name: "Asian Paints Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "Decorative goods",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
  {
    id: 6,
    img: Logo4,
    company_name: "Titan Company Ltd",
    certificate_status: "Active ",
    expiry_date: "20 May 2023",
    product: "FMCG",
  },
];
const Certificate = () => {
  const formSectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 6;

  const scrolltoForm = () => {
    formSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const totalPages = Math.ceil(content.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItem = content.slice(startIdx, endIdx);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-[60px] lg:mt-0 font-sans   ">
      <h2 className="text-[#005447] px-4 lg:px-[100px] text-wrap justify-normal lg:text-[32px] font-bold">
        Halal Certified Companies
      </h2>
      <p className="text-sm font-medium px-4 lg:px-[100px] font-sans lg:w-8/12 lg:text-black text-[#646464] mt-4 lg:mt-2 ">
        Here is the list or directory of Food Companies who secured HALAL
        certificate. HALAL Certified Food Companies include Manufacturers,
        Suppliers, Exporters, Importers, Distributors, Producers, Traders etc.
      </p>
      <div className="hidden lg:block flex flex-col mt-6">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full px-4 lg:px-[100px] inline-block align-middle">
            <div className="border border-[#DADADA] bg-white rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead>
                  <tr className="bg-[#fbfbfb]">
                    <th
                      scope="col"
                      className="p-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Logo
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Company name
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Certificate status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Expiry date
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Nature of product/Service
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-start text-xs font-medium text-black whitespace-nowrap"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADADA]">
                  {currentItem.map((company) => (
                    <tr key={company.id}>
                      <td className="px-4 ">
                        <img src={company.img} alt="logo" />
                      </td>
                      <td className="py-7 font-semibold text-sm text-[#111111] whitespace-nowrap">
                        {company.company_name}
                      </td>
                      <td className="py-7 flex font-medium text-sm text-[#313131] gap-2 whitespace-nowrap">
                        <img src={Active} alt="img" />
                        <span>{company.certificate_status}</span>
                      </td>
                      <td className="py-7 px-4 text-[#646464] text-sm font-medium whitespace-nowrap">
                        {company.expiry_date}
                      </td>
                      <td className="py-7 px-4 text-[#111111] text-sm font-semibold whitespace-nowrap">
                        {company.product}
                      </td>
                      <td className="py-7 px-4 text-[#008F78] text-sm font-semibold whitespace-nowrap">
                        <Link to="/clientdeatils">View details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full mt-6">
      {currentItem.map((company) => {
        return (
          <div
            key={company.id}
            className="flex flex-col bg-white border border-gray-200 p-4 items-start justify-between relative"
          >
            <div className="flex gap-4">
              <img
                src={company.img}
                alt="logo"
                className="whitespace-nowrap w-16 h-16 object-cover"
              />
              <div>
                <p className="font-semibold text-sm whitespace-nowrap text-[#111111]">
                  {company.company_name}
                </p>
                <p className="font-semibold text-sm text-[#111111] whitespace-nowrap">
                  <span className="text-[#646464]">Category:</span> {company.product}
                </p>
                <p className="flex gap-2 text-sm whitespace-nowrap text-[#646464]">
                  <img src={MobileNav} alt="status icon" />
                  {company.certificate_status}
                </p>
              </div>
            </div>
            <Link to='/clientdeatils' className="absolute bottom-4 right-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                  stroke="#008F78"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7398 8.46875L14.2598 11.9987L10.7398 15.5287"
                  stroke="#008F78"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        );
      })}
    </div>
    
    

      <div className="flex lg:justify-center mt-12 gap-4  lg:gap-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 mb-[92px] border border-[#005447] bg-[#008F78] rounded-lg disabled:opacity-50 text-white "
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`p-[10px] gap-2 w-[40px] h-[40px] mb-[92px] ${
              currentPage === index + 1
                ? "bg-[#313131] text-white"
                : "bg-white border border-gray-200   text-gray-300"
            } rounded-lg`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-[10px]  border bg-[#005447] mb-[92px] text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Certificate;
