import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProjectContext from '../../ProjectContext'
import './ProjectPreview.css'
import boafgroup from '../../assets/boaf-group.png'
import boafsolo from '../../assets/boaf-solo.png'
import golden from '../../assets/golden.png'
import screams from '../../assets/scream-streams.png'


const ProjectPreview = () => {
  const params = useParams();
  const projects = useContext(ProjectContext)
  const project = projects.find(project => project.id === params.id)
  return (
    <div className="project-main">
      <div className="proj-header">
          <h1>{project.title}</h1>
          <h3>{project.description}</h3>
      </div>
      <div className="proj-info">
        <img style={{height:'300px'}} src={project.img} />
        <div className="proj-body">
          <p>{project.body}<br/><br/><br/>  
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