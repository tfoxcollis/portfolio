import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProjectContext from '../../ProjectContext'


const ProjectPreview = () => {
  const params = useParams();
  const projects = useContext(ProjectContext)
  const project = projects.find(project => project.id === params.id)
  return (
    <div>
      {project.title}
    </div>
  )
}

export default ProjectPreview