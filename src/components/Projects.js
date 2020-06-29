import React from "react"
import Title from "./Title"
import styled from "styled-components"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ title, projects, showLink }) => {
  return (
    <SectionProjects>
      <Title title={title}></Title>
      <ProjectsCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
        {showLink && (
          <Link to="/projects">
            <Button data-sal="slide-up" data-sal-duration="1000">
              All Projects
            </Button>
          </Link>
        )}
      </ProjectsCenter>
    </SectionProjects>
  )
}

const SectionProjects = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.body};
`
const ProjectsCenter = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`
const Button = styled.button`
  display: block;
  width: 14rem;
  height: 3.1rem;
  text-align: center;
  margin: 0 auto;
  margin: 3rem auto 0;
`

export default Projects
