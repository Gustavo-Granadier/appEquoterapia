import React from 'react'
import { GoArrowRight } from "react-icons/go";
import "./VideoCard.css"

const VideoCard = () => {
  return (
    <div className='card-video'>
      <div className="porfile-video">
        <img src="profile.jpg" alt="Profile" />
      </div>
      <div className='card-text-video'>
        <h2>Responsável e Praticante</h2>
        <div className='description-video'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate rhoncus egestas
            habitant Lorem ipsum dolor sit amet consectetur. Vulputate rhoncus
            egestas habitant habitant Lorem ipsum dolor sit amet.
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