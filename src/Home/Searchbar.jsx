import React from 'react';
import { useState } from 'react';
import { BsFilterRight } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/logo.png'; // Import your logo image
import '../../src/searchbar.css'
import { Link } from 'react-router-dom';

const Searchbar = () => {

  return (
    <div className="search-bar">
      <Link to='/products'>
      <input type="text" placeholder="Search..." />
      <button type="submit">
      <FontAwesomeIcon icon={faSearch} />
      </button>
      </Link>
    </div>
  );
};

export default Searchbar;
