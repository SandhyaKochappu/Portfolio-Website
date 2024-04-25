import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import PortfolioGithub from "../components/PortfolioGithub";

const Portfolio = () => {
  return (
    <div>                    
        <Navbar/>        
        <Heroimageothers heading="Projects." text="Have a look at some of my recent works."/>
        <PortfolioGithub />
        <Footer />
    </div>
  )
}

export default Portfolio;