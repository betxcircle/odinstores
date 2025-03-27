import React from 'react'
import CategoriesTab from './CategoriesTab';
import Slider from './Slider';
import TopbarHeader from './TopbarHeader'
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Footer from './Footer';
import Trending from './Trending';
import BrandSection from './BrandSection';
import FeaturedCategories from './FeaturedCategories';
import LimitedStockDeals from './LimitedStockDeals';
import TvDeals from './TvDeals';
import NewArrivals from './NewArrivals';
import Hero from './Hero';
import Features from './Features';

const Home = () => {
  return (
    <div>
     <TopbarHeader />
     <Navbar />
     <Hero/>
     <Features/>
     {/* <Searchbar/> */}
     {/* <Slider/> */}
    {/* <CategoriesTab/> */}
    <Trending/>
    <BrandSection/>
    <LimitedStockDeals/>
    <FeaturedCategories/>
    <TvDeals/>
    <NewArrivals/>
    <Footer/>
    </div>
  )
}

export default Home;