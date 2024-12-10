import React from 'react'

const NavbarDown = () => {
  return (
    <div className=' hover:[&>*]:underline lg:flex justify-around m-2  md:grid md:grid-cols-6 sm:grid sm:grid-cols-4 below-sm:grid below-sm:grid-cols-3'>
      <button>Gift Guide</button>
      <button className='text-blue-600'>New</button>
      <button>Women</button>
      <button>Men</button>
      <button>Kids</button>
      <button>Shoes</button>
      <button>Bags & Accessories</button>
      <button>Home</button>
      <button>Beauty</button>
      <button className='text-red-600'>Clearance</button>
      <button className='text-blue-600'>Flash Events</button>
      
    </div>
  )
}

export default NavbarDown
