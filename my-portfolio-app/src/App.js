//parent page, call other pages from this page
import React from "react";
import './index.css';
//importing pages
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/About" element = {<About />}/>
        <Route path="/Portfolio" element = {<Portfolio />}/>
        <Route path="/Resume" element = {<Resume />}/>
        <Route path="/Contact" element = {<Contact />}/>
        
      </Routes>
    </>
  );
}

export default App;
