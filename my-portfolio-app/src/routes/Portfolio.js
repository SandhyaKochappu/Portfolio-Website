import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";

const Portfolio = () => {
  return (
    <div>                    
        <Navbar/>
        <Footer />
        <Heroimageothers heading="Projects." text="Have a look at some of my recent works."/>
    </div>
  )
}

export default Portfolio;