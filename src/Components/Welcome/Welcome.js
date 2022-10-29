import React, { useEffect } from 'react'
import './Welcome.css'
import Skills from '../Skills/Skills'


const Welcome = () => {

  return (
    <div className="welcome-message">
      <h1 className="hello">Welcome.</h1>
      <div className="intro">
      </div>
      <Skills />
    </div>
  )
}

export default Welcome