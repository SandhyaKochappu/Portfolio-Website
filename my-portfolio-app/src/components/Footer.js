import "./FooterStyles.css";

import React from 'react';
import { 
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <h4>< FaHome size={20} style={{color: "#fff", marginright: "2rem"}} />
                    <p>52 Brooks close</p>
                    <p>MangoHill</p>
                  </h4>
                </div>
              
                <div className="phone">
                    <h4>< FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    042-1367-010</h4>
                </div>
                <div className="email">
                    <h4>< FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    sandhyakochappu@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <h4>I love analysing data and software development.</h4>
                <div className="social">
                <a href="https://www.facebook.com/sandhyakochappu" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </a>
                <a href="https://www.linkedin.com/in/sandhya-kochappu-a811bb121/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </a>
                <a href="https://www.instagram.com/sandhyakochappu" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                </a>
                
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Footer