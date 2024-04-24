import "./HeroimageothersStyles.css";
import React from 'react';

/* Creating background styles for pages other than home page.*/

function Heroimageothers(props) {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  );
};

export default Heroimageothers;