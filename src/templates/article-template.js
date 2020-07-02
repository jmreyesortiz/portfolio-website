import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ReactMarkdown from "react-markdown"
import { Counter, LikeButton, BlockQuote } from "../components/Complete"

const ComponentName = ({ data }) => {
  const { body } = data.article.childStrapiArticlesContent.childMdx
  return (
    <Layout>
      <Wrapper>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: ${({ theme }) => theme.colorPrimary5};
      color: ${({ theme }) => theme.colorWhite};
      border-radius: ${({ theme }) => theme.radius};
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.spacing};
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: ${({ theme }) => theme.colorGrey5};
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: ${({ theme }) => theme.colorGrey5};
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticles(slug: { eq: $slug }) {
      childStrapiArticlesContent {
        childMdx {
          body
        }
      }
    }
  }
`

export default ComponentName
