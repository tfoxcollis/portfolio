
import React from 'react'
import './App.css';
import Nav from '../Nav/Nav';
import Welcome from '../Welcome/Welcome';
import Skills from '../Skills/Skills';

const App = () => {
  return (
    <div className="main-page">
        <Nav />
      <div className="main-container">
        <Welcome />
        {/* <Skills /> */}
      </div>
    </div>  
  )
}

export default App
