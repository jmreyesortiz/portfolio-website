import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  return (
    <Layout>
      <BlogTemplate>
        <BlogCenter>
          <article>
            <ReactMarkdown source={content}></ReactMarkdown>
          </article>
          <Link to="/blog"> blog</Link>
        </BlogCenter>
      </BlogTemplate>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

const BlogTemplate = styled.section`
  padding: 5rem 0;
  h1,
  h2 {
    color: royalblue;
    text-align: center;
  }
  ul {
    margin-top: 2rem;
    display: inline-block;
    color: ${({ theme }) => theme.colorGray8};
  }
  ul li {
    background: ${({ theme }) => theme.colorGrey9};
    color: ${({ theme }) => theme.colorGrey5};
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  blockquote {
    background: ${({ theme }) => theme.colorPrimary9};
    border-radius: ${({ theme }) => theme.radius};
    padding: 1rem;
    line-height: 2;
    color: v ${({ theme }) => theme.colorPrimary5};
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: ${({ theme }) => theme.radius};
  }
  img {
    width: 100%;
    margin: 3rem 0;
  }
  .Image {
    width: 100%;
    margin: 3rem 0;
  }
`

const BlogCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`
export default ComponentName
