import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="proj-container">
      <div className="proj-title">
        Projects.
      </div>
      <div className="box-container">
        <div className="box">
          <div className="imgbox">
            <img src="https://i.postimg.cc/7PVqmm2w/1581873309154.jpg" />
          </div>
          <div className="content">
            <h2> Carlton Agesa<br /> creative developer</h2>
          </div>
        </div>
        <div className="box">
          <div className="imgbox">
            <img src="https://i.postimg.cc/Rh8sXk1g/2004649.jpg" />
          </div>
          <div className="content">
          <h2>Twitter<br />@carl_agesa</h2>
          </div>
        </div>
        <div className="box">
          <div className="imgbox">
            <img src="https://i.postimg.cc/7PVqmm2w/1581873309154.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects