import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimageothers from "../components/Heroimageothers";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>                    
        <Navbar/>
        <Heroimageothers heading="Contact" text="Let's have a chat."/>
        <ContactForm />     
        <Footer />
    </div>
  )
}

export default Contact;