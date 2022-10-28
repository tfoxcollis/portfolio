
import React from 'react'
import './App.css';
import Nav from '../Nav/Nav';
import Welcome from '../Welcome/Welcome';

const App = () => {
  return (
    <div className="main-page">
        <Nav/>
      <div className="main-container">
        <Welcome/>
        {/* <Resume />
        <Skills /> */}
      </div>
    </div>  
  )
}

export default App
