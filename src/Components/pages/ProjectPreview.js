import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProjectContext from '../../ProjectContext'
import './ProjectPreview.css'



const ProjectPreview = () => {
  const params = useParams();
  const projects = useContext(ProjectContext)
  const project = projects.find(project => project.id === params.id)

  const futureBuild = project.future.map(future => {
    return(
      <li>{future}</li>
    )
  })

  const techUsed = project.tech.map(tech => {
    return(
      <li>{tech}</li>
    )
  })

  return (
    <div className="project-main">
      <div className="proj-header">
          <h1>{project.title}</h1>
          <h3>{project.description}</h3>
      </div>
      <div className="proj-info">
        <div className="proj-img">
          <img src={project.img} />
          <a href={project.url}>
            Check it out!
          </a>
        </div>
        <div className="proj-body"> 
          <p>
            &nbsp; &nbsp;{project.body}
          </p>
          <div className="list-box">
            <div className="proj-features">
              <p className="list-title">
                Future Features: 
              </p>
              <ul>
                {futureBuild}
              </ul>
            </div>
            <br/><br/>
            <div className="proj-tech">
              <p className="list-title">
                Technology used: 
              </p>
              <ul>
                {techUsed}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview