import React from 'react'
import rick from '../../assets/videos/rick.mp4'
import './Rick.css'

const Rick = () => {
  return (
    <div className="rick-main">
      <div className='rick-container'>
        <h1>Gotcha!</h1>
        <p>I mainly did this for some street cred with my 13 year old.</p>
        <video src={rick} autoPlay loop />
      </div>
    </div>
  )
}

export default Rick