import React from 'react'
import rick from '../../assets/videos/rick.mp4'
import './Rick.css'

const Rick = () => {
  return (
    <div className="rick-main">
      <div className='rick-container'>
        <h1>Gotcha!</h1>
        <video src={rick} autoPlay loop />
        <p>I mainly did this for some street cred with my 13 year old. He thinks I'm cool now. <br/>Parenting is about balance.</p>
      </div>
    </div>
  )
}

export default Rick