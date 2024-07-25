import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Header/>
      <main className='bg-[#F0F6EE]'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
