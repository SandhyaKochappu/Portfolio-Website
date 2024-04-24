import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";

const About = () => {
  return (
    <div>                    
        <Navbar/>
        <Heroimageothers heading="About" text="I'm a graduate student at QUT."/>
        <Footer />
    </div>
  )
}

export default About;