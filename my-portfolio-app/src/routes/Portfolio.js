import React, { useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";


const Portfolio = () => {
  return (
    <div>                    
        <Navbar/> 
        <Heroimageothers heading="Projects." text="Have a look at some of my recent works."/>*/
        <h1> List of Projects </h1>
        <SearchBar />
        <Results />
        <Footer />        
    </div>
  )
}

export default Portfolio;