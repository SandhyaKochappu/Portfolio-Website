//rafce-> to automatically populate the div
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";

const Resume = () => {
  return (
    <div>                    
        <Navbar/>
        <Heroimageothers heading="Resume" text="Here's my latest resume."/>
        <Footer />
    </div>
  )
}

export default Resume;