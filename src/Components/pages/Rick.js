import React, { useEffect, useState } from 'react'
import rick from '../../assets/videos/rick.mp4'
import './Rick.css'
import RetroHitCounter from 'react-retro-hit-counter';

const Rick = () => {
  const [activity, setActivity] = useState(0)

  useEffect (() => {
    fetch(`${process.env.REACT_APP_RICKROLL_DOMAIN}/api/activity`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data) => setActivity(data.id))
  }, [])

  return (
    <div className="rick-main">
      <div className='rick-container'>
        <RetroHitCounter
          hits={activity}
          withBorder={true}
          withGlow={false}
          minLength={4}
          size={40}
          padding={4}
          digitSpacing={3}
          segmentThickness={4}
          segmentSpacing={0.5}
          segmentActiveColor="#76FF03"
          segmentInactiveColor="#315324"
          backgroundColor="#222222"
          borderThickness={7}
          glowStrength={0.5}
        />
        <h3 className="rick-counter-description">successful RickRolls</h3>
        <video src={rick} autoPlay loop />
        <p>I mainly did this for some street cred with my 13 year old. He thinks I'm cool now. <br/>Parenting is about balance.</p>
      </div>
    </div>
  )
}

export default Rick
