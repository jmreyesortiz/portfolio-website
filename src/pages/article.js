import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Articles from "../components/Articles"
import { graphql } from "gatsby"

const Article = ({ data }) => {
  const {
    allStrapiArticles: { nodes: articles },
  } = data
  return (
    <Layout>
      <ArticlePage>
        <Articles articles={articles} title="article"></Articles>
      </ArticlePage>
    </Layout>
  )
}

const ArticlePage = styled.section`
  background: ${({ theme }) => theme.colorWhite};
  min-height: calc(100vh - 5rem - 9rem);
`

export default Article

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
