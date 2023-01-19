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
      <h1>{project.title}</h1>
      <h4>{project.description}</h4>
      <img style={{width:'700px'}} src={project.img} />
      <h3>{project.body}</h3>
      <a href={project.url}>
        Project Website
      </a>

    </div>
  )
}

export default ProjectPreview