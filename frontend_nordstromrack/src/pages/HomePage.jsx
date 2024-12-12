import React from 'react'
import Section1 from '../components/HomePage/Section1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'


const HomePage = () => {
  return (
   <div className='mx-5'>
    <Navbar />
    <Section1 />
    <Footer />
   </div>  )
}

export default HomePage
