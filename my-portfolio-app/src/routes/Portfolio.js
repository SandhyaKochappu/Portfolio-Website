import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";

const Portfolio = () => {
  return (
    <div>                    
        <Navbar/>
        <Footer />
        <Heroimageothers heading="PROJECTS." text="Some of my most recent projects"/>
    </div>
  )
}

export default Portfolio;