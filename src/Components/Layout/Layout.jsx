import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className='bg-black flex flex-col'>
      <div className='max-w-[1280px] mx-auto'>
        <Navbar />
        <Header className="hidden lg:block"/>
        <main className='bg-[#F0F6EE]  lg:px-0'>
          {children}
        </main>
     <Footer/>
      </div>
    </div>
  );
};

export default Layout;
