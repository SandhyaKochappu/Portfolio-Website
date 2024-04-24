import "./FooterStyles.css";

import React from 'react';
import { 
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaFacebook, 
    FaTwitter, 
    FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginright: "2rem"}} />
                <div>
                    <p>52 Brooks close</p>
                    <p>MangoHill</p>
                </div>
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
                <p>I love analysing data and software development.</p>
                <div className="social">
                < FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}} />
                < FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}} />
                < FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}} />  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer