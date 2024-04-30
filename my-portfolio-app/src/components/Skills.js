import React from 'react';
import Skill from "../assets/skill.jpg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className='card-container'>      
        <img src={Skill}
        alt="Card Image"
        className='card-img'
        /> 
        <h1 className='card-title'>Skills</h1> 
        <p  className='card-desc'>Skills</p>      
        </div>
  ) 
}

export default Skills