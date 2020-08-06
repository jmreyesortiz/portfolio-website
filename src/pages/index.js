import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects.js"
import { graphql } from "gatsby"
import Articles from "../components/Articles"
import SEO from "../components/SEO"
export default ({ data }) => {
  //destructuring
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiArticles: { nodes: articles },
  } = data

  return (
    <Layout>
      <SEO
        title="Home | Juan M. Reyes Ortiz"
        description="Home Page Jmreyesortiz.com"
      />
      <Hero></Hero>
      <Projects
        booleanLink
        projects={projects}
        title="Featured Projects"
        showLink
      />
      <Articles articles={articles} title="Latest Articles" showLink></Articles>
    </Layout>
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

    allStrapiArticles(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
