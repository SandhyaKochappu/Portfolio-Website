//rafce-> to automatically populate the div
import { React } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
//import  ResumePDF  from "../components/ResumePDF";


const Resume = () => {  

  return (
    <div>                    
        <Navbar/>
        <Heroimageothers  />
                       
        <Footer />
    </div>
  )
}

export default Resume;