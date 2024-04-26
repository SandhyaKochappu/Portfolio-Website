//rafce-> to automatically populate the div
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import Card from "../components/Card";
import Edu from "../assets/Edu.jpg";


const Resume = () => {
  return (
    <div>                    
        <Navbar/>
        <Heroimageothers heading="Resume" text="Here's my latest resume."/>
        <Card imgSrc={Edu}
          imgAlt="Card Image"
          title="Education"
          buttonText="Learn more"
          link="cardPage"
        />
        <Footer />
    </div>
  )
}

export default Resume;