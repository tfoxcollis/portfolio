import React from 'react'
import './Projects.css'
import boafGroup from '../../assets/boaf-group.png'
import boafSolo from '../../assets/boaf-solo.png'
import screamStreams from '../../assets/scream-streams.png'
import zen from '../../assets/zen.png'

const Projects = () => {
  return (
    <div className="proj-container">
      <div className="proj-title">
        Projects.
      </div>
      <div className="box-container">
        <div className="box">
          <div className="imgbox">
            <img src={boafGroup}/>
          </div>
          <div className="content">
            <h2> Birds of a Feather<br />Group- React with Graphql</h2>
          </div>
        </div>
        <div className="box">
          <div className="imgbox">
            <img src={boafSolo}/>
          </div>
          <div className="content">
          <h2>Birds of a Feather<br />Solo- React</h2>
          </div>
        </div>
        <div className="box">
          <div className="imgbox">
            <img src={screamStreams} />
            </div>
          <div className="content">
          <h2>Scream Streams<br />Paired- React</h2>
          </div>
        </div>
        <div className="box">
          <div className="imgbox">
            <img src={zen} />
            </div>
          <div className="content">
          <h2>Zen in Ten<br />Group- React with Typescript</h2>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Projects