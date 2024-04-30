import  { React, useState }  from 'react';
import Edu from "../assets/Edu.jpg";
import "./Card.css";
import MyGrid from "./MyGrid";



const Card = () => {

    const [gridVisible, setGridVisible] = useState(false);
    const [showGrid, setShowGrid] = useState(true); 
  return (
    <div className="card" onClick={() => setGridVisible(true)}>
    
    <div className='card-container'>      
        <img src={Edu}
        alt="Card Image"
        className='card-img'
        /> 
        <p className='card-title'>Education</p>        
        </div>
        <button className='card-btn' onClick={() => setShowGrid(!showGrid)}>
            {showGrid ? 'Hide' : 'Learn More'}
        </button>
        {showGrid && <MyGrid />} 

        </div>
        



        
  )
}

export default Card