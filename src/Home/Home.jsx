import React from 'react'
import CategoriesTab from './CategoriesTab';
import Slider from './Slider';
import TopbarHeader from './TopbarHeader'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
     <TopbarHeader />
     <Navbar />
     <Searchbar/>
     <Slider/>
    <CategoriesTab/>
    <Footer/>
    </div>
  )
}

export default Home;