import React from 'react'
import img1 from '../../assets/💰 End Hunger Program.svg'
import img2 from '../../assets/Layer 5.svg'
import img3 from '../../assets/image 14.svg'
import img4 from '../../assets/image 15.svg'
import img5 from '../../assets/copy.svg'
import img6 from '../../assets/qr.svg'

const Home = () => {
  return (
    <div className='bg-[#edf5fa] w-full font-montserrat '>
    <div className='flex border  rounded-xl m-6'>
    <img src={img4} alt='img'/>
    <div className='flex justify-between relative'>
    <div className=' p-6 w-[352px] gap-2'>
    <span className='font-bold text-xl'> End Hunger Program</span>
    <p className='text-[#313131] text-base font-normal'>Stop hunger everyday with hand to hand effect. Day to Day visit to city.</p>
    </div>
    <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${img3})` }}>
    <button className='relative bg-white'>
    Donate now
    </button>
  </div>
  
    </div>
    </div>
    <div className='lg:flex gap-3 mt-3 rounded-sm mx-6 mb-8'>
    <div className='relative bg-white w-full max-w-[584px] h-[340px] px-5 py-3'>
      <div className='flex justify-between mb-4'>
        <div className='gap-3 flex items-center'>
          <span className='font-bold text-base text-center'>Certificate</span>
          <button className='bg-[#0072DA] p-[6px] w-[84px] text-white font-semibold text-xs rounded-[4px]'>Active</button>
        </div>
  
        <button className='flex items-center gap-[7px]'>
          <img src={img2} alt='img2' className='w-5 h-5'/>
          <span className='text-[#0072DA] text-sm font-semibold text-center'>Download Certificate</span>
        </button>
      </div>
      <hr/>
      <div className='mt-5 flex justify-between'>
        <div className='flex flex-col space-y-4'>
          <div className='gap-1'>
            <span className='text-[#9A9A9A] font-medium text-sm'>Certificate Number</span>
            <p className='flex items-center gap-2'>
              <span className='text-gray-900'>076019 / 02082023 / 1010</span>
              <img src={img5} alt='img5' className='w-6 h-6'/>
            </p>
          </div>
          <div className='gap-1'>
            <span className='text-[#9A9A9A] font-medium text-sm'>Date of Expiry</span>
            <p className='flex items-center gap-2'>
              <span className='text-gray-900'>01 Aug 2024</span>
            </p>
          </div>
          <div className='gap-1'>
            <span className='text-[#9A9A9A] font-medium text-sm'>Certificate for</span>
            <p className='flex items-center gap-2'>
              <span className='text-gray-900'>KAY-EM Luxury Hotels & Resorts</span>
            </p>
          </div>
        </div>
        <div className='space-y-2'>
          <img src={img6} alt='img6' className='w-[110px] h-[110px]'/>
          <button className='flex items-center gap-[7px] text-[#0072DA] text-sm font-semibold'>
            <img src={img2} alt='img' className='w-5 h-5'/>
            <span>Download QR</span>
          </button>
        </div>
      </div>
      <button className='absolute bottom-3 right-3 bg-[#008F78] border border-[#005447] text-white px-8 py-3 rounded-[4px] text-base font-semibold'>
        View Details
      </button>
    </div>
  
    {/* Container for the second certificate */}
    <div className='relative bg-white w-full max-w-[584px] h-[340px] px-5 py-3'>
      <div className='flex justify-between mb-4 '>
      <div className='font-bold text-base '>Reports</div>
        
        <button className='flex items-center gap-[7px]'>
          <img src={img2} alt='img2' className='w-5 h-5'/>
          <span className='text-[#0072DA] text-sm font-semibold text-center'>Download all</span>
        </button>
      </div>
      <hr/>
    <div className='mt-7 space-y-7 flex-col'>
          <div className=' flex justify-between '>
            <span className='text-[#313131] font-medium text-base'>R&D and pre audit</span>
            <button className=''>
              <img src={img2} alt='img5'/>
            </button>
          </div>
          <div className=' flex justify-between '>
          <span className='text-[#313131] font-medium text-base'>Invoice and finance report</span>
          <button className=''>
            <img src={img2} alt='img5'/>
          </button>
        </div>
        <div className=' flex justify-between '>
        <span className='text-[#313131] font-medium text-base'>Audit report</span>
        <button className=''>
          <img src={img2} alt='img5'/>
        </button>
      </div>
      <div className=' flex justify-between '>
      <span className='text-[#313131] font-medium text-base'>R&D and post audit </span>
      <button className=''>
        <img src={img2} alt='img5'/>
      </button>
    </div>
    <div className=' flex justify-between '>
    <span className='text-[#313131] font-medium text-base'>Shariah </span>
    <button className=''>
      <img src={img2} alt='img5'/>
    </button>
  </div>
          </div>
       
        </div>
       
      </div>
     
    </div>

  )
}

export default Home
