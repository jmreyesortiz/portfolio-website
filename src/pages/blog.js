import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Articles from "../components/Articles"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Article = ({ data }) => {
  const {
    allStrapiArticles: { nodes: articles },
  } = data
  return (
    <Layout>
      <SEO title="Blog | Juan M. Reyes-Ortiz"></SEO>
      <ArticlePage>
        <Articles articles={articles} title="All Articles"></Articles>
      </ArticlePage>
    </Layout>
  )
}

const ArticlePage = styled.section`
  background: ${({ theme }) => theme.colorWhite};
  min-height: calc(100vh - 5rem - 9rem);
`

export default Article
// Blog Page. Query to display blog objects.
export const query = graphql`
  {
    allStrapiArticles {
      nodes {
        id
        slug
        title
        date(formatString: "MMM Do, YYYY")
        desc
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
