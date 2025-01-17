import React from 'react'
import user from '../../assets/user.svg'
import notification from '../../assets/notification.svg'
import index from '../../assets/messages.svg'
import certification from '../../assets/document.svg'

const Sidebar = () => {
  return (
    <div className='w-[209] bg-white h-screen px-[22px] py-[22px] font-montserrat'>
    <div className='flex-col '>
    <div className='flex bg-[#008F78]  gap-[10px] p-[10px] rounded-[4px]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8253 18.9596H5.17533C2.89199 18.9596 1.04199 17.1013 1.04199 14.8179V8.64295C1.04199 7.50961 1.74199 6.08461 2.64199 5.38461L7.13366 1.88461C8.48366 0.834614 10.642 0.784614 12.042 1.76795L17.192 5.37628C18.1837 6.06795 18.9587 7.55128 18.9587 8.75961V14.8263C18.9587 17.1013 17.1087 18.9596 14.8253 18.9596ZM7.90033 2.86795L3.40866 6.36795C2.81699 6.83461 2.29199 7.89295 2.29199 8.64295V14.8179C2.29199 16.4096 3.58366 17.7096 5.17533 17.7096H14.8253C16.417 17.7096 17.7087 16.4179 17.7087 14.8263V8.75961C17.7087 7.95961 17.1337 6.85128 16.4753 6.40128L11.3253 2.79295C10.3753 2.12628 8.80866 2.15961 7.90033 2.86795Z" fill="white"/>
    <path d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z" fill="white"/>
    </svg> <span className='text-white font-semibold text-sm'>Dashboard</span></div>
    <a href='/' className='flex gap-[10px] mt-3 p-[10px]'>
   <img src={user} alt='user'/>
<span className='font-medium text-sm '>Profile</span>
    </a>
    <a href='/' className='flex gap-[10px] mt-3 p-[10px]'>
    <img src={notification} alt='user'/>
 <span className='font-medium text-sm '>Notification</span>
     </a>
     <a href='/' className='flex gap-[10px] mt-3 p-[10px]'>
     <img src={index} alt='user'/>
  <span className='font-medium text-sm '>Inbox</span>
      </a>
      <a href='/' className='flex gap-[10px] mt-3 p-[10px]'>
     <img src={certification} alt='user'/>
  <span className='font-medium text-sm '>Certification</span>
      </a>
    
    </div>
    
    </div>
  )
}

export default Sidebar
