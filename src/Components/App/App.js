
import React from 'react'
import './App.css';
import Navbar from '../Navbar/Navbar'
import Welcome from '../Welcome/Welcome';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../pages/Resume';
import Home from '../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} /> 
          <Route path='/resume' exact component={Resume} />
          <Route path='/aboutme' exact component={About} />
        </Switch>
      </Router>
    );
}

export default App
