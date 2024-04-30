import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>                    
        <Navbar />
        <Heroimageothers />
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About;