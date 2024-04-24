import "./HeroimageothersStyles.css";
import React from 'react';

/* Creating background styles for pages other than home page.*/

const Heroimageothers = () => {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  );
};

export default Heroimageothers;