
import React from 'react'
import './App.css';
import Nav from '../Nav/Nav';
import Welcome from '../Welcome/Welcome';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const App = () => {
  return (
    <div className="main-page">
        <Nav />
      <div className="main-container">
        <Welcome />
        <Projects />
      </div>
    </div>  
  )
}

export default App
