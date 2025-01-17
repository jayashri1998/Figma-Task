import React from 'react'
import img5 from '../../assets/OurServices.svg'

const Ourprocess = () => {
  return (
    <div className='mt-[60px] lg:mt-[120px] font-montserrat'>
      <h2 className='text-[#005447] text-wrap justify-normal lg:text-[32px] font-bold'>Our Process</h2>
      
      {/* Main Section */}
      <div className='flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[50px] mt-6 lg:mt-10'>
        
        {/* Image Section */}
        <div className='order-1 lg:order-2 flex justify-center items-center w-full lg:w-[30%]'>
          <img src={img5} alt='Halal Service' className='w-full h-auto rounded-xl' />
        </div>

        {/* Text Section */}
        <div className='order-2 lg:order-1 mt-6 lg:mt-0 w-full lg:w-[50%]'>
          <div className='text-sm lg:text-base font-normal text-[#646464]'>
            <span className='text-[#313131] leading-6 lg:font-medium font-semibold text-sm lg:text-base text-justify'>
              While providing Halal certification, a competent authority audits and ensures that the business:
            </span>
            <ul className='list-disc px-5 text-[#313131] tracking-tighter text-justify space-y-6 mt-6 font-medium lg:font-normal text-sm lg:text-base'>
              <li>Neither is nor consists of or contains any part or matter of an animal that a Muslim is prohibited by Shariah to consume or that has not been slaughtered in accordance with Shariah.</li>
              <li>Does not contain anything which is considered to be impure according to Shariah.</li>
              <li>Has not been prepared, processed or manufactured using an instrument that was not free from anything impure according to Shariah.</li>
              <li>Has not in the course of preparation, processing, or storage been in contact with or close proximity to any food that fails to satisfy paragraph (a), (b), or (c) or anything that is considered to be impure according to Hukum Shariah.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Steps Section */}
      <div className='mt-[40px] space-y-6 w-full font-montserrat'>
        {/* Step 1 */}
        <div className='border rounded-lg bg-white p-4'>
          <h2 className='gap-[3px]'>
            <span className='font-medium text-lg lg:leading-[24px] tracking-[2.5px] uppercase text-[#646464]'>STEP 1</span>
            <p className='text-[#005447] font-bold text-xl lg:text-2xl'>Application</p>
          </h2>
          <p className='pt-6 font-normal text-base text-justify text-[#2A422B]'>
            The business wishing to obtain Halal Certification must apply. It is important for the business to be aware of Halal Certification requirements at this stage and ensure that it is compliant with Halal requirements, Halal systems requirements, and Halal staffing requirements.
          </p>
        </div>

        {/* Step 2 */}
        <div className='border rounded-lg bg-white p-4'>
          <h2 className='gap-[3px]'>
            <span className='font-medium text-lg lg:leading-[24px] tracking-[2.5px] uppercase text-[#646464]'>Step 2</span>
            <p className='text-[#005447] font-bold text-xl lg:text-2xl'>Audit</p>
          </h2>
          <p className='pt-6 font-normal text-base text-justify text-[#2A422B]'>
            The business wishing to obtain Halal Certification must apply. It is important for the business to be aware of Halal Certification requirements at this stage and ensure that it is compliant with Halal requirements, Halal systems requirements, and Halal staffing requirements.
          </p>
          <div className='bg-[#F0F6EE] rounded-lg mt-6'>
            <ul className='list-disc px-6 py-3 text-[#2A422B] text-base font-normal'>
              <li>Documentation</li>
              <li>Processing, handling, and product distribution</li>
              <li>Storage, display, and product serving</li>
              <li>Cleanliness, sanitary, and food safety</li>
              <li>The overall aspects of the premises</li>
              <li>Tools, apparatus, and machines</li>
              <li>Packaging and labeling</li>
            </ul>
          </div>
          <p className='pt-6 font-normal text-base  xl:text-lg 2xl:text-xl text-justify text-[#2A422B]'>
            During the audit, the business might have to provide criteria of acceptance of raw materials (ingredients), certificate of analysis, and Halal certificate of individual ingredients. Once the audit is completed, an audit report will be prepared and signed by both parties.
          </p>
        </div>

        {/* Step 3 */}
        <div className='border rounded-lg bg-white p-4'>
          <h2 className='gap-[3px]'>
            <span className='font-medium text-lg lg:leading-[24px] tracking-[2.5px] uppercase text-[#646464]'>Step 3</span>
            <p className='text-[#005447] font-bold text-xl lg:text-2xl'>Certification</p>
          </h2>
          <p className='pt-6 font-normal text-base  xl:text-lg 2xl:text-xl text-justify text-[#2A422B]'>
            Once the Halal audit is complete, a Technical Committee will review the documents submitted by the business and the audit report submitted by the Auditors. If the audit report is satisfactory and the business and/or products satisfy the Halal certification criteria, then the Halal Certification Body issues the Halal Certificate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ourprocess;
