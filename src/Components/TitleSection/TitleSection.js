import React from 'react'
import '../App/App.css'
import video5 from '../../assets/videos/video-5.mp4'
import './TitleSection.css'
import Contact from '../Contact/Contact'


const TitleSection = () => {
  return (
    <div className='title-container'>
      <video src={video5} autoPlay loop muted />
      <h1>Frontend Software Developer</h1>
      <p>What are you waiting for?</p>
      <Contact />
    </div>
  )
}

export default TitleSection