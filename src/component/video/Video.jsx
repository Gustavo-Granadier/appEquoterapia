import React from 'react'
import MenuBar from '../menuBar/MenuBar'
import NavBar from '../navBar/NavBar'
import VideoCard from './videoCard/VideoCard'
import "./Video.css" 

const Video = () => {
  return (
    <div>
                <NavBar/>
                <div className="video">
                    <h1>Números de Apoio</h1>
                    <h2>Aqui estão algumas histoerias de superação de nossos praticantes</h2>
                    <div className="video-container">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
    
                    </div>
                </div>
                <MenuBar />
            </div>
  )
}

export default Video