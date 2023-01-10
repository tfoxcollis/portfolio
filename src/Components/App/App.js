
import React from 'react'
import './App.css';
import Nav from '../Nav/Nav';
import Navbar from '../Navbar/Navbar'
import Welcome from '../Welcome/Welcome';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import { Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="main-page">
        <Navbar />
        {/* <Route path="/resume" component={ Resume } />
        <Route exact path="/">
          <div className="main-container">
            <Welcome />
            <Projects />
            <About />
            <Contact />
          </div>

        </Route> */}
      
    </div>  
  )
}

export default App
