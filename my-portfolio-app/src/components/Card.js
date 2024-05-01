import  { React, useState }  from 'react';
import Edu from "../assets/Edu.jpg";
import "./Card.css";
import MyGrid from "./MyGrid";
import Skill from "../assets/skill.jpg";

const Card = () => {

    const [gridVisible, setGridVisible] = useState(false);
    const [showGrid, setShowGrid] = useState(true);
    const [cards] = useState([
      {
        Image:{Edu},
        title: 'Education',
        text: 'Masters in Computer Application'

      },
      {
        Image:{Skill},
        title: 'Skills',
        text: 'Aanlytical'

      },
      {
        Image:{Edu},
        title: 'Certifications',
        text: 'OCA, '
      }
    ])

  return (
    <div>
    <section>
    <div className="card" onClick={() => setGridVisible(true)}>
    <div className='container'>    
    <div className="cards" >  
    {
      cards.map((card, i) =>(
        <div key={i} classname='card'> 
        <img src={card.Image}
            alt="Card Image"
            className='card-img'
        />   
        <h1>{card.title}</h1> 
        <p>{card.text}</p>  
        </div>
      )      
      )
    }
    
        </div>       
        </div>         
        <button className='card-btn' onClick={() => setShowGrid(!showGrid)}>
            {showGrid ? 'Hide' : 'Learn More'}
        </button>
        {showGrid && <MyGrid />}         
        </div>
        </section>
        </div>
        



        
  )
}

export default Card