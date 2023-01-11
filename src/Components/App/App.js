import React from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import About from '../pages/About'
import Resume from '../pages/Resume'
import Home from '../pages/Home'
import Rick from '../pages/Rick'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/about' exact component={About} />
          <Route path='/rick' exact component={Rick} />
        </Switch>
      </Router>
  )
}

export default App
