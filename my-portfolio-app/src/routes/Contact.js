import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";



const Contact = () => {
  return (
    <div>                    
        <Navbar/>
        <Heroimageothers heading="Contact" text="Let's have a chat."/>
        <Footer />
    </div>
  )
}

export default Contact;