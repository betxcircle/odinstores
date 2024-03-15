import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faClock, faBolt, faCartShopping, faShoppingBag,} from '@fortawesome/free-solid-svg-icons';
import '../Navbar.css'; // Import your CSS file
import logo from '../../public/logo.png';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { BsFilterRight } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {mobile} from "../../responsive";

const Navbar = () => {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
<nav className="nav">
     <Link to='/'>
     <a href="#" className="nav__brand">
        <img src={logo} className='logo' alt='log'/>
      </a>
     </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to='/register'>
          <button href="#" className="nav__signbtn" onClick={toggleModal}>
           Sign Up
          </button>
          </Link>
        </li>
        <h1>|</h1>
        <li className="nav__item">
          <Link to='/login'>
          <button href="#" className="nav__signbtn">
            Login
          </button>
          </Link>
        </li>
    
        <li className="nav__item">
        <Link to='/cart'>
        <Badge style={{color: 'black'}}>
        <ShoppingCartOutlinedIcon style={{fontSize: 20}}/>
        </Badge>
        </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
      <BsFilterRight
       className="filter-icon"
       style={{
        color: 'black',
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
       }}
        /> 
      </div>

    </nav>

  );
};

export default Navbar;
