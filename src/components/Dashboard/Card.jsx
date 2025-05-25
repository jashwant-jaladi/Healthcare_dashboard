import React from 'react';
import healthCard from '../../data/healthCard';
import '../../styles/dashboardStyles/card.css'; 
import ProgressBar from './ProgressBar'; 

const Card = () => {
  return (
    <>
      {healthCard.map((card, index) => (
        <div key={index} className="card" >
          <div id='img-container'>
          <img src={card.image} alt="health icon" />
          <h3 className='name'>{card.name}</h3>
          </div>
          <p className='date'>{card.date}</p>
          <ProgressBar color={card.color} />
        </div>
      ))}
    </>
  );
};

export default Card;
