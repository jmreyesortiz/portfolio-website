import React from "react"
import Title from "./Title"
import styled from "styled-components"
import Project from "./Project"

const Projects = ({ title, projects, booleanLink }) => {
  return (
    <SectionProjects>
      <Title title={title}></Title>
      <ProjectsCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </ProjectsCenter>
    </SectionProjects>
  )
}

const SectionProjects = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colorGrey10};
`
const ProjectsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`

export default Projects
