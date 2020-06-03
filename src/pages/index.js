import React from "react"
import Layout from "../components/layout"
import GlobalStyles from "../styles/fonts/GlobalStyles.js"
import Hero from "../components/Hero"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/Themes"
import { Toggle } from "../components/Toggler"
import { useDarkMode } from "../components/useDarkMode"
import Projects from "../components/Projects.js"
import { graphql } from "gatsby"

export default function Home({ data }) {
  //destructuring
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Layout>
          <Hero></Hero>
          <Projects booleanLink projects={projects} title="Projects" />
          <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
          <GlobalStyles />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
