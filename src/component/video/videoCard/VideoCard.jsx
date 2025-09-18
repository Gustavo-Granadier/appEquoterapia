import React from 'react'
import { GoArrowRight } from "react-icons/go";
import "./VideoCard.css"

const VideoCard = ({ name, praticante, foto, descrition }) => {
  return (
    <div className='card-video'>
      <div className="porfile-video">
        <img src={foto} alt="Profile" />
      </div>
      <div className='card-text-video'>
        <h2>{name} e {praticante}</h2>
        <div className='description-video'>
          <p>
            {descrition}
          </p>
        </div>
        <div className='video-click'>
          <div className='video-click-container'>
            <p>Ler mais</p>
            <GoArrowRight className="moreIcon-video" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard