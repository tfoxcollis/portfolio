
import React from 'react'
import './App.css';
import Nav from '../Nav/Nav';
import Welcome from '../Welcome/Welcome';

const App = () => {
  return (
    <div className="main-page">
      <div className="nav-bar">
        <Nav/>
      </div>
      <div className="welcome-message">
        <Welcome/>
      </div>
    </div>  
  )
}

export default App
