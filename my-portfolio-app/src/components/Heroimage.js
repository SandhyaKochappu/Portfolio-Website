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
        <p> Hi,I'm a Data Analyst.</p>
        <h1> </h1>
        <div>
            <Link>

            </Link>
        </div>
    </div>
    </div>
  );
};

export default Heroimage;