import React from 'react'
import './Projects.css'
import boafGroup from '../../assets/boaf-group.png'
import boafSolo from '../../assets/boaf-solo.png'
import screamStreams from '../../assets/scream-streams.png'
import golden from '../../assets/golden.png'

const Projects = () => {
  return (
    <div id="projContainer" className="proj-container">
      <div className="proj-title">
        Projects.
      </div>
      <div className="box-container">
        <a href="https://birds-ui.vercel.app" target="_blank" rel="noreferrer">
          <div className="box">
            <div className="imgbox">
              <img src={boafGroup}/>
            </div>
            <div className="content">
              <h2> Birds of a Feather<br />Group- React with Graphql</h2>
            </div>
          </div>
        </a>
        <a href="https://birds-of-a-feather-omega.vercel.app" target="_blank" rel="noreferrer">
          <div className="box">
            <div className="imgbox">
              <img src={boafSolo}/>
            </div>
            <div className="content">
            <h2>Birds of a Feather<br />Solo- React</h2>
            </div>
          </div>
        </a>
        <a href="https://scream-streams.vercel.app" target="_blank" rel="noreferrer">
          <div className="box">
            <div className="imgbox">
              <img src={screamStreams} />
              </div>
            <div className="content">
            <h2>Scream Streams<br />Paired- React</h2>
            </div>
          </div>
        </a>
        <a href="https://golden-tic-tac-toe.vercel.app" target="_blank" rel="noreferrer">
          <div className="box">
            <div className="imgbox">
              <img src={golden} />
              </div>
            <div className="content">
            <h2>Golden Tic-Tac-Toe<br />Solo - Vanilla JS</h2>
            </div>
          </div>
        </a>
      </div>
      </div>
  )
}

export default Projects
