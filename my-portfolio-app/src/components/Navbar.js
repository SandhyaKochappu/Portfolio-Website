import "./NavbarStyles.css";
import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //Portfolio link pointing to home page
    <div classname="header">
    <Link to="/">
    <h1>Portfolio</h1>
    </Link>
    <ul>
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
    </div>
  );
};

export default Navbar