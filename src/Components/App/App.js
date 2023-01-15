import React from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import About from '../pages/About'
import Resume from '../pages/Resume'
import Home from '../pages/Home'
import Rick from '../pages/Rick'
import ProjectPreview from '../pages/ProjectPreview'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProjectContext from '../../ProjectContext'
import pages from '../../data/projects'

const App = () => {
  return (
    <ProjectContext.Provider value={pages} >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/about' exact component={About} />
          <Route path='/rick' exact component={Rick} />
          <Route path='/projects/:id' exact component={ProjectPreview} />
        </Switch>
      </Router>
    </ProjectContext.Provider>
  )
}

export default App
