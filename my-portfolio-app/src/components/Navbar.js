import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    //Portfolio link pointing to home page
    <div className="header">
    <Link to="/">
    <h1>Portfolio</h1>
    </Link>
    <ul className="nav-menu">
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
            <Link to="/Portfolio">Portfolio</Link>
        </li>
    </ul>
    <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff"}}/>
    </div>
    </div>
  );
};

export default Navbar;