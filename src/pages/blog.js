import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <BlogPage>
        <Blogs blogs={blogs} title="blog"></Blogs>
      </BlogPage>
    </Layout>
  )
}

const BlogPage = styled.section`
  background: ${({ theme }) => theme.colorWhite};
  min-height: calc(100vh - 5rem - 9rem);
`

export default Blog
export const query = graphql`
  {
    allStrapiBlogs {
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
