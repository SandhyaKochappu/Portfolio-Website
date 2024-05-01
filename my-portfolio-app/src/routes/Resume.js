//rafce-> to automatically populate the div
import { React } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import  Card  from "../components/Card";


const Resume = () => { 


  return (
    <div>                    
        <Navbar/>
        <Heroimageothers  />
        <Card />               
        <Footer />
    </div>
  )
}

export default Resume;