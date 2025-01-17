import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className='w-full flex flex-col min-h-screen'>
    <div className='w-full  mx-auto flex flex-col'>
      <Navbar />
      <Header className='hidden lg:block' />
      <main className='bg-[#F0F6EE] flex-grow px-4 lg:px-0'>
        {children}
      </main>
      <Footer />
    </div>
  </div>
  
  );
};

export default Layout;
