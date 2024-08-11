import React from 'react'
import img from '../assets/image9.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='items-center flex justify-center py-6 lg:pt-[163px] lg:pb-[154px] font-montserrat'>
    <div className='bg-white  p-6   lg:p-10 shadow-lg rounded-xl' >
    <div className='flex-col space-y-6'>
    <div className='flex gap-3'>
    <img src={img} alt='img' className='w-[30.69px] h-8'/>
    <span className='flex-col space-y-1'>
    <span className='font-bold text-base leading-6 font-montserrat text-[#2B2B35]'>Welcome to Halal India</span>
    <p className='text-xs font-normal leading-3 text-[#646464] font-montserrat'>     Please login to get access of all the services</p>
    </span>
    </div>
    <div className='flex-col space-y-4 lg:w-[340px]'>
    <div className='space-y-1 flex flex-col'>
    <label className='text-sm font-semibold text-[#646464] font-montserrat'>Email or Phone Number</label>
    <input
      type='text'
      placeholder='Enter here'
      className='text-sm font-normal text-[#9A9A9A] py-3 pl-3 pr-[14px] border border-gray-200 rounded-[4px]'
    />
  </div>
  <div className='space-y-1 flex flex-col'>
    <label className='text-sm font-semibold text-[#646464] font-montserrat'>Password</label>
    <input
      type='text'
      placeholder='Enter Password'
      className='text-sm font-normal text-[#9A9A9A] py-3 pl-3 pr-[14px] border border-gray-200 rounded-[4px]'
    />
  </div>
  
    </div>
    <Link to='/' className='flex mt-8 rounded-xl text-sm font-semibold lg:w-[400px] p-[12px_32px] justify-center items-center lg:gap-[10px] border border-[#005447] bg-[#008F78] text-white'>
    Login
  </Link>


    </div>
    <p className='flex pt-4 justify-end leading-6'><span className='font-normal text-black text-base font-montserrat'>New user? </span><Link to='/signup' className='text-[#008F78] font-semibold text-base font-montserrat underline pl-1 '>Register here</Link></p>
    </div>
    </div>
  )
}

export default Login
