//rafce-> to automatically populate the div
import { React } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import  Card  from "../components/Card";
import Skills from "../components/Skills";

const Resume = () => { 


  return (
    <div>                    
        <Navbar/>
        <Heroimageothers  />
        <Card />
        <Skills />
               
        <Footer />
    </div>
  )
}

export default Resume;