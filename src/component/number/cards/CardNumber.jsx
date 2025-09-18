import React from 'react';
import "./CardNumber.css";

const CardNumber = ({ name, number, foto, descrition }) => {
  return (
    <div className='card-number'>
      <div className="porfile">
        <img src={foto} alt="Profile" />
      </div>
      <div className='card-text'>
        <h2>{name}</h2>
        <div className='description-number'>
          <p>
            {descrition}
          </p>
        </div>
        <div className='number'>
          <p>Número: {number}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNumber;