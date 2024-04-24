import "./HeroimageStyles.css";

import React from 'react';
//adding images to the homepage
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
    <div className="mask">  
    <img className="into-img" src={IntroImg} alt="IntroImg"/>      
    </div>
    <div className="content">
        <p> Hi, I am Sandhya Kochappu </p>
        <h1> I'm a Data Analyst </h1>
        <div>
            <Link to="/Resume"
            className="btn">Resume_btn
            </Link>
            <Link to="/Contact"
            className="btn btn-light">Contact_btn
            </Link>
        </div>
    </div>
    </div>
  );
};

export default Heroimage;