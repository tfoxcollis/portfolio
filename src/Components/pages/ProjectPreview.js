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

  return (
    <div className="project-main">
      <div className="proj-header">
          <h1>{project.title}</h1>
          <h3>{project.description}</h3>
      </div>
      <div className="proj-info">
        <img style={{height:'300px'}} src={project.img} />
        <div className="proj-body">
          <p>
            {project.body}
            <br/><br/>
            <div className="list-box">
              <p className="list-title">Future Features could include: </p>
               
              <ul>
                {futureBuild}
              </ul>

            </div>

            <br/><br/><br/>  
            <a href={project.url}>
              Check it out!
            </a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProjectPreview