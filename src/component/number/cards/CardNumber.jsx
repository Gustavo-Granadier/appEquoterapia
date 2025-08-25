import React from 'react';
import "./CardNumber.css";

const CardNumber = () => {
  return (
    <div className='card-number'>
      <div className="porfile">
        <img src="profile.jpg" alt="Profile" />
      </div>
      <div className='card-text'>
        <h2>Nome Responsável</h2>
        <div className='description-number'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate rhoncus egestas
            habitant Lorem ipsum dolor sit amet consectetur. Vulputate rhoncus
            egestas habitant habitant Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='number'>
          <p>Número: 42 999113278</p>
        </div>
      </div>
    </div>
  );
};

export default CardNumber;