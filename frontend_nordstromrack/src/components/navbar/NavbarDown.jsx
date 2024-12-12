// // import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const NavbarDown = () => {
//   const navigate = useNavigate(); // Assuming you are using react-router for navigation

//   const navBarDropdown = (
//     <div className="absolute left-0 w-full bg-white p-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out group-hover:block hidden">
//       <div className="grid grid-cols-4 gap-4">
//         {/* Example Column for Dropdown Content */}
//         <div>
//           <ul className="space-y-2">
//             <li>
//               <h5 className="font-bold text-lg mb-2">
//                 <a href="/">New: Get Inspired</a>
//               </h5>
//             </li>
//             <li>
//               <a
//                 onClick={() => {
//                   navigate("/mensproduct");
//                 }}
//                 className="hover:text-blue-500"
//               >
//                 Top 100 Deals
//               </a>
//             </li>
//             {/* Add more items here as needed */}
//           </ul>
//         </div>
//       </div>
//     </div>
    
//   );

//   return (
//     <div className='hover:[&>*]:underline lg:flex justify-around m-2 md:grid md:grid-cols-6 sm:grid sm:grid-cols-4 below-sm:grid below-sm:grid-cols-3'>
//       <div className="relative group">
//         <button>Gift Guide</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button className='text-blue-600'>New</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Women</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Men</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Kids</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Shoes</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Bags & Accessories</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Home</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button>Beauty</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button className='text-red-600'>Clearance</button>
//         {navBarDropdown}
//       </div>
//       <div className="relative group">
//         <button className='text-blue-600'>Flash Events</button>
//         {navBarDropdown}
//       </div>
//     </div>
//   );
// }

// export default NavbarDown;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarDown = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Gift Guide", id: "gift-guide", className: "" },
    { label: "New", id: "new", className: "text-blue-600 hover:text-blue-800" },
    { label: "Women", id: "women", className: "hover:text-gray-500" },
    { label: "Men", id: "men", className: "hover:text-gray-500" },
    { label: "Kids", id: "kids", className: "hover:text-gray-500" },
    { label: "Shoes", id: "shoes", className: "hover:text-gray-500" },
    { label: "Bags & Accessories", id: "bags", className: "hover:text-gray-500" },
    { label: "Home", id: "home", className: "hover:text-red-500" },
    { label: "Beauty", id: "beauty", className: "hover:text-gray-500" },
    { label: "Clearance", id: "clearance", className: "text-red-600 hover:text-red-800" },
    { label: "Flash Events", id: "flash-events", className: "text-blue-600 hover:text-red-800" },
  ];

  const handleMenuClick = (id) => {
    if (!isHoverEnabled) {
      setActiveMenu(id); // Open the clicked menu.
      setIsHoverEnabled(true); // Enable hover functionality.
    } else if (activeMenu === id) {
      setActiveMenu(null); // Close the menu if it's already active.
      setIsHoverEnabled(false); // Disable hover functionality.
    } else {
      setActiveMenu(id); // Switch to the clicked menu.
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null); // Close all menus.
    setIsHoverEnabled(false); // Disable hover functionality.
  };

  const navBarDropdown = (
    <div className="absolute left-0 overflow-hidden w-[80vw] bg-white p-4 mt-2 mx-20 shadow-md z-10 transform -translate-x-center-screen">
  <div className="grid grid-cols-4 gap-4 max-w-screen-lg mx-auto">
        <div>
          <ul className="space-y-2">
            <li>
              <h5 className="font-bold text-lg mb-2">
                <a href="/">New:Mens Items</a>
              </h5>
            </li>
            <li>
              <a
                onClick={() => navigate("/mensproduct")}
                className="hover:text-blue-500"
              >
                Mens
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <h5 className="font-bold text-lg mb-2">
                <a href="/">New: Get Womens items</a>
              </h5>
            </li>
            <li>
              <a
                onClick={() => navigate("/mensproduct")}
                className="hover:text-blue-500"
              >
                Womens
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <h5 className="font-bold text-lg mb-2">
                <a href="/">New: Baby items</a>
              </h5>
            </li>
            <li>
              <a
                onClick={() => navigate("/mensproduct")}
                className="hover:text-blue-500"
              >
                Baby
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <h5 className="font-bold text-lg mb-2">
                <a href="/">New: Get clothings items</a>
              </h5>
            </li>
            <li>
              <a
                onClick={() => navigate("/mensproduct")}
                className="hover:text-blue-500"
              >
                Clothings
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <h5 className="font-bold text-lg mb-2">
                <a href="/">New: get items</a>
              </h5>
            </li>
            <li>
              <a
                onClick={() => navigate("/mensproduct")}
                className="hover:text-blue-500"
              >
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="relative"
      onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves.
    >
      <div className="hover:[&>*]:underline lg:flex justify-around m-2 md:grid md:grid-cols-6 sm:grid sm:grid-cols-4 below-sm:grid below-sm:grid-cols-3">
        {menuItems.map((menu) => (
          <div
            key={menu.id}
            className="relative group"
            onMouseEnter={() => isHoverEnabled && setActiveMenu(menu.id)} // Open dropdown on hover if hover is enabled.
          >
            <button
              onClick={() => handleMenuClick(menu.id)}
              className={`focus:outline-none ${menu.className} ${
                activeMenu === menu.id ? "text-blue-600" : ""
              }`}
            >
              {menu.label}
            </button>
            {activeMenu === menu.id && navBarDropdown}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDown;

