import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import SearchBar from "../components/SearchBar";



const Portfolio = () => {
  return (
    <div>                    
        <Navbar/> 
        <Heroimageothers heading="Projects." text="Have a look at some of my recent works."/>
        <SearchBar />        
        <Footer />        
    </div>
  )
}

export default Portfolio;