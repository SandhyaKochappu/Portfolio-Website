//if nav-menu is avtive, display hamburger nav menu, else normal nav-menu
import "./NavbarStyles.css";
//adding event listener for scrolling and changing color
import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
        };
    window.addEventListener("scroll", changeColor);


  return (
    //Portfolio link pointing to Portfolio page
    <div className={color ? "header header-bg" : "header"}>
    <Link to="/Portfolio">
    <h1>Portfolio</h1>
    </Link>
    
    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Resume">Resume</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
    {click ? (
        <FaTimes size={20} style={{ color: "#fff"}}/>
    ) : (
        <FaBars size={20} style={{ color: "#fff"}}/>
    )}
    </div>
    </div>
  );
};

export default Navbar;