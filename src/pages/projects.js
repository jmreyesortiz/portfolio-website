import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import styled from "styled-components"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <ProjPage>
        <Projects projects={projects} title="All Projects"></Projects>
      </ProjPage>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export const ProjPage = styled.section`
  background: ${({ theme }) => theme.colorGrey10};
  min-height: calc(100vh - 5rem - 9rem);
`
