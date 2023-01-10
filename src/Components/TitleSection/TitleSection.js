import React from 'react'
import '../App/App.css'
import video4 from '../../videos/video-4.mp4'
import './TitleSection.css'
import Contact from '../Contact/Contact'


const TitleSection = () => {
  return (
    <div className='title-container'>
      <video src={video4} autoPlay loop muted />
      <h1>Frontend Software Developer</h1>
      <p>What are you waiting for?</p>
      <Contact />
    </div>
  )
}

export default TitleSection