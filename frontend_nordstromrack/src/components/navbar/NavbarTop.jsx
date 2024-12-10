import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { PiCubeBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { GrChatOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const NavbarTop = () => {
  return (
    <div>
    {/* <Section1 /> */}
    <div className='bg-black py-2 my-0 text-white text-center'><span className='font-bold'>EXTRA 40% OFF CLEARANCE</span>.NOW EXTENDED IN STORES ONLY Thru 12/8. ALL SALES FINAL. Restrictions apply. <span className='underline cursor-pointer'>Shop Clearance </span></div>

    <section className="bg-white  mx-auto  top-0 left-0 w-full z-50">
<div className=" mx-auto px-3.5 py-4   md:flex items-center justify-between">
  {/* Logo Section */}
  <div className="flex items-center">
    <img src="https://i.pinimg.com/originals/80/ca/53/80ca53d743a3d75ae114c5eaa0b792e5.png" alt="Logo" className="h-20 w-auto m-auto" />
  </div>

  {/* Search Bar Section */}
  <div className=" relative flex    px-4 py-2 items-center w-1/2  mx-auto">
    <input 
      type="text" 
      placeholder="Search ..." 
      className="w-full border border-gray-300 rounded-none px-4 py-2 focus:ring focus:ring-gray-500 outline-none"
    /><IoSearch className='h-8 w-auto absolute inset-y-3 right-2 flex items-center pr-3 text-gray-500' />
  </div>
  
  {/* Button Group Section */}
  <div className="flex justify-evenly md:justify-between  items-center gap-10 text-lg">
  <div className="relative ml-2 inline-block text-left group">
    {/* Button */}
    <button
      type="button"
      id="menu-button"
      aria-haspopup="true"
      className="flex items-center  focus:outline-none"
      // onClick={toggleDropdown}
    >
      Sign In <IoMdArrowDropdown className="ml-2 transition-transform group-hover:rotate-180" />
    </button>

    {/* Dropdown Menu */}
    
      <div
        className="absolute z-10   mt-2 w-80  left-1/2 -translate-x-1/2  origin-top rounded-md bg-white shadow-xl ring-1 ring-black/5 hidden  group-hover:block"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-base mx-10 mb-2 mt-4  text-white text-center  bg-blue-700 hover:bg-blue-500"
            role="menuitem"
          >
            Sign In | Create Account
          </a>
         
        </div>
        <div className="py-1" role="none">
        <a
            href="#"
            className="block px-6 py-2 text-xl text-gray-950 font-bold "
            role="menuitem"
          >
           Your Account
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <PiCubeBold className="mt-1 mr-1 text-xl"  />  Purchases
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <FaRegHeart className="mt-1 mr-1 text-xl"  />  Wish List
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <FiTruck className="mt-1 mr-1 text-xl"  />  Shipping Addresses
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          < MdOutlinePayment  className="mt-1 mr-1 text-xl"  />  Payment Methods
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <FaExternalLinkAlt className="mt-1 mr-1 text-xl"  />  Pay & Manage Nordstromrack card
          </a>
          <a
            href="#"
            className="block px-6 py-4 text-xl text-gray-950 font-bold "
            role="menuitem"
          >
           Account Setting
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          < MdLockOutline  className="mt-1 mr-1 text-xl"  />  Password & Personal Info
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          < TfiEmail  className="mt-1 mr-1 text-xl"  />  Email & Mail Preference
          </a>
          
          <a
            href="#"
            className="block px-6 py-4 text-xl text-gray-950 font-bold "
            role="menuitem"
          >
           Need Help?
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <  GrChatOption   className="mt-1 mr-1 text-xl"  />  Contact Us
          </a>
          <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500 hover:underline"
            role="menuitem"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconStoreRackOutlined" class="sisVy">
          <path fill="#191A1B" fill-rule="evenodd" d="M12.369 13.5h3.893l-.32-2.154c-.128-.886-.8-1.174-1.867-1.216l-1.215-.043v-.342l1.109-.106c1.184-.118 1.91-.704 1.91-1.91V7.42c0-1.13-.79-1.92-1.92-1.92H7.75v8h3.776v-2.678h.438zm-.267-4.373h-.576V7.474h.576z" clip-rule="evenodd"></path>
          <path fill="#191A1B" fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16h-3v-4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4zm5 16h2v-3H9zm4 0h2v-3h-2z" clip-rule="evenodd"></path>
           </svg> Find a Store
          </a>
        </div>
       
      </div>
   
  </div>

    
  


         <div className= "hidden  relative md:inline-block text-left group" >
         <button id="menu-button2" className='flex hover:text-blue-500 hover:underline group'  aria-haspopup="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconStoreRackOutlined" class="sisVy">
          <path fill="#191A1B" fill-rule="evenodd" d="M12.369 13.5h3.893l-.32-2.154c-.128-.886-.8-1.174-1.867-1.216l-1.215-.043v-.342l1.109-.106c1.184-.118 1.91-.704 1.91-1.91V7.42c0-1.13-.79-1.92-1.92-1.92H7.75v8h3.776v-2.678h.438zm-.267-4.373h-.576V7.474h.576z" clip-rule="evenodd"></path>
          <path fill="#191A1B" fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16h-3v-4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4zm5 16h2v-3H9zm4 0h2v-3h-2z" clip-rule="evenodd"></path>
           </svg>   Set Your Store <IoMdArrowDropdown className='m-1.5 transition-transform group-hover:rotate-180' /></button>
          
           <div className="absolute z-10   mt-2 w-80  left-1/2 -translate-x-1/2  origin-top rounded-md bg-white shadow-xl ring-1 ring-black/5 hidden  group-hover:block"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button2"
      >
        <div className="py-1" role="none">
        <a
            href="#"
            className=" px-5 py-1 text-base flex  hover:text-blue-500  hover:underline"

            role="menuitem"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconStoreRackOutlined" class="sisVy">
          <path fill="#191A1B" fill-rule="evenodd" d="M12.369 13.5h3.893l-.32-2.154c-.128-.886-.8-1.174-1.867-1.216l-1.215-.043v-.342l1.109-.106c1.184-.118 1.91-.704 1.91-1.91V7.42c0-1.13-.79-1.92-1.92-1.92H7.75v8h3.776v-2.678h.438zm-.267-4.373h-.576V7.474h.576z" clip-rule="evenodd"></path>
          <path fill="#191A1B" fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16h-3v-4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4zm5 16h2v-3H9zm4 0h2v-3h-2z" clip-rule="evenodd"></path>
           </svg>  Store Location
          </a>
        </div>
        </div>
         
         </div>
         
          <button className='hidden md:flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconBoxOutlined" class="BmW1d">
          <path fill="#191A1B" fill-rule="evenodd" d="M11.188 1.267a2 2 0 0 1 1.624 0l9.594 4.264a1 1 0 0 1 .594.913v10.462a2 2 0 0 1-1.188 1.827l-9 4a2 2 0 0 1-1.624 0l-9-4A2 2 0 0 1 1 16.906V6.444a1 1 0 0 1 .594-.913zM3 16.906l8 3.555v-8.824L3 7.911zm1.526-10.49 2.445 1.139 7.356-3.426L12 3.094zm12.225-1.21L9.34 8.658 12 9.897l7.474-3.481zM21 7.91l-8 3.726v8.824l8-3.555z" clip-rule="evenodd"></path>
          </svg>  
              Purchases</button>
          
          
          
          <div className= "relative inline-block text-left group" >
          <button className=' hover:text-blue-500'  
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button3">
          <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconShoppingBagNumberOutlined" class="lvL2s" role="img" title="Shopping Bag">
         <path fill="#191A1B" fill-rule="evenodd" d="M12 0a4 4 0 0 0-4 4v2H4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a2 2 0 0 0-2-2h-4V4a4 4 0 0 0-4-4m2 8v1a1 1 0 1 0 2 0V8h4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8h4v1a1 1 0 0 0 2 0V8zm0-2V4a2 2 0 1 0-4 0v2z" clip-rule="evenodd"></path>
          </svg>
          </button>
          <div className="absolute z-10 p-5  mt-2 w-60   -translate-x-48  origin-top rounded-md bg-white shadow-xl ring-1 ring-black/5  hidden group-hover:block"
              role="menu"
           aria-orientation="vertical"
           aria-labelledby="menu-button3"
           >
           <p className="text-sm">  <a
            href="#"
            className="  text-base  text-blue-500 underline"
            role=""
          >
          Sign In
          </a> to see what may you have added before</p>
          <p className="mt-10 text-base">Accepted payment methods</p> 
           
              </div>
          </div>

          
      
  
  </div>
</div>
<hr />
{/* Mobile Search Bar */}
{/* <div className="sm:hidden relative flex   px-4 py-2">
  <input 
    type="text" 
    placeholder="Search products..." 
    className="w-full  border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300 outline-none"
  /><IoSearch className='h-8 w-auto absolute inset-y-3 right-2 flex items-center pr-3 text-gray-500' />
</div> */}

</section>


  </div>

  )
}

export default NavbarTop
