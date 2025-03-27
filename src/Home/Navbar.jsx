// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt, faClock, faBolt, faCartShopping, faShoppingBag,} from '@fortawesome/free-solid-svg-icons';
// import '../Navbar.css'; // Import your CSS file
// import logo from '../../public/logo.png';
// import Badge from '@mui/material/Badge';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
// import { BsFilterRight } from "react-icons/bs";
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {mobile} from "../../responsive";

// const Navbar = () => {

//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => setModal(!modal);

//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };

//   return (
// <nav className="nav">
//      <Link to='/'>
//      <a href="#" className="nav__brand">
//         <img src={logo} className='logo' alt='log'/>
//       </a>
//      </Link>
//       <ul className={active}>
//         <li className="nav__item">
//           <Link to='/register'>
//           <button href="#" className="nav__signbtn" onClick={toggleModal}>
//            Sign Up
//           </button>
//           </Link>
//         </li>
//         <h1>|</h1>
//         <li className="nav__item">
//           <Link to='/login'>
//           <button href="#" className="nav__signbtn">
//             Login
//           </button>
//           </Link>
//         </li>
    
//         <li className="nav__item">
//         <Link to='/cart'>
//         <Badge style={{color: 'black'}}>
//         <ShoppingCartOutlinedIcon style={{fontSize: 20}}/>
//         </Badge>
//         </Link>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//       <BsFilterRight
//        className="filter-icon"
//        style={{
//         color: 'black',
//         alignSelf: 'center',
//         fontSize: 30,
//         marginTop: 10,
//         fontWeight: 'bold',
//        }}
//         /> 
//       </div>

//     </nav>

//   );
// };

// export default Navbar;
import { useState } from "react";
import '../../src/App.css'
import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiHeart, FiUser, FiChevronDown } from "react-icons/fi";
import Slider from "./Slider";
import Hero from "./Hero";
import Features from "./Features";
import { useCart } from "./CartContext"; // Import Cart Context

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cart } = useCart(); // Get cart data

  return (
    <header className="bg-red shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        {/* Left: Menu Icon & Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu />
          </button>
          {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
          <Link to="/">
      <h2 className="text-2xl font-bold text-black-600 cursor-pointer">Odincirclex</h2>
    </Link> {/* Text Logo */}
        </div>

        {/* Center: Category Dropdown & Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl items-center gap-4">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 border px-4 py-3 rounded-md hover:bg-gray-100"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Categories <FiChevronDown />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                <li className="p-3 hover:bg-gray-100 cursor-pointer">Electronics</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">Clothing</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">Home & Kitchen</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">Beauty & Health</li>
              </ul>
            )}
          </div>

          {/* Search Bar */}
          <Link to="/searchpage" className="btn">
          <input type="text" placeholder="Search..." className="w-full p-3 border rounded" />
          </Link>

        
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
      {/* Wishlist */}
      <Link to="/wishlist">
        <FiHeart className="text-3xl cursor-pointer" />
      </Link>

      {/* Cart */}
      
        {/* Cart */}
        <Link to="/cart" className="relative">
          <FiShoppingCart className="text-3xl cursor-pointer" />
          
          {/* Cart Badge */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      {/* Register/Login */}
      <Link to="/auth">
        <FiUser className="text-3xl cursor-pointer" />
      </Link>
    </div>
      </div>

      {/* Mobile View: Search Bar & Category Dropdown */}
      {menuOpen && (
        <div className="md:hidden p-2 flex flex-col gap-2">
          <input type="text" placeholder="Search..." className="w-full p-2 border rounded" />
          
          {/* Mobile Category Dropdown */}
          <div className="relative">
            <button
              className="flex w-full items-center justify-between border p-2 rounded-md bg-gray-100"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Categories <FiChevronDown />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-full bg-white border rounded-md shadow-lg z-50">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Electronics</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Clothing</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Home & Kitchen</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Beauty & Health</li>
              </ul>
            )}
          </div>
        </div>
      )}

    </header>
  );
}

