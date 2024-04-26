import React from 'react';
import "./Card.css";
import Edu from "../assets/Edu.jpg";
import React2 from "../assets/react2.jpg";

const Card = () => {
  return (
    <div className='card-container'>
      <img
        src={Edu}
        alt="Card Image"
        className='card-img'
        />
        <h1 className='card-title'>Education</h1>
        <a href="cardPage" className='card-btn'>
          Learn more
        </a>
    </div>
  )
}

export default Card;