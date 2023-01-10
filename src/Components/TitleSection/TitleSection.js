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
      <p>&#10023; React &#10023; Javascript &#10023; CSS &#10023; HTML &#10023; </p>
      <Contact />
    </div>
  )
}

export default TitleSection