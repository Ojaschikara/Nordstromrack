import React from 'react'
import { MdOutlineInstallMobile } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    ////bg-#F0F3F5
    <div className= "  m-auto px-10 h-auto text-gray-900  " >  
      <div className=' flex flex-wrap  gap-2 text-center justify-between py-5 '>
        <div >
          <h1 className='font-semibold'>Customer Service</h1>
          <ul>
            <li>Order Status</li>
            <li>Guest Return</li>
            <li>Shipping & Return Policy</li>
            <li>Gift Cards</li>
            <li>Product Recalls</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=' '>
          <h1 className='font-semibold'>About Us</h1>
          <ul>
            <li>About Our Brand</li>
            <li>THe Nordy Club</li>
            <li>Store Locator</li>
            <li>All Brands</li>
            <li>Careers</li>
            <li>Get Email Updates</li>
            <li>Nordstrom Blog</li>
            <li>Nordy Podcast</li>
            <li>Store Openings</li>
          </ul>
        </div>
        <div className=' '>
          <h1 className='font-semibold'>Nordstrom Rack & The Community</h1>
          <ul>
            <li>Corporate Social Responsibilty</li>
            <li>Diversity, Equity, Inclusion and Belonging</li>
            <li>Big Brothers Big Sisters</li>
          </ul>
        </div>
        <div className=' '>
          <h1 className='font-semibold'>Nordstrom Card</h1>
          <ul>
            <li>Apply for a Nordstromr Card</li>
            <li>Pay My Bill</li>
            <li>Manage My Nordstrom Card</li>
          </ul>
        </div>
        <div className=' '>
          <h1 className='font-semibold'>Nordstromr,Inc</h1>
          <ul>
            <li>Nordstromr</li>
            <li>HauteLook</li>
            <li>Investor Realtions</li>
            <li>Press Releases</li>
            <li>Nordstromr Media Network</li>
            <li>dsdd</li>
          </ul>
        </div>
        <div className=' w-1/4 '>
          <h1 className='flex gap-1 justify-center text-lg '><MdOutlineInstallMobile className='mt-1' /> Download Our Apps </h1>
          <ul className='flex justify-evenly my-4'>
            <li><FaFacebook /> </li>
            <li><FaXTwitter /></li>
            <li><FaPinterest /></li>
            <li> <FaInstagram /></li>
            
          </ul>
        </div>
        
      </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-2 md:w-2/3  ' >
        <span className='hover:underline hover:text-blue-400 cursor-pointer '>Privacy</span>
        <span className='hover:underline hover:text-blue-400 cursor-pointer'> Your Privacy Rights</span>
        <span className='hover:underline hover:text-blue-400 cursor-pointer'>Terms & Conditions</span>
        <span className='hover:underline hover:text-blue-400 cursor-pointer'> California Supply Chain Act</span>
        <span className=''>@2024 Nordstrom Rack</span>
      </div>

      
    </div>
  )
}

export default Footer
