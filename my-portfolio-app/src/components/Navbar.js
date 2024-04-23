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
    </div>
  );
};

export default Navbar