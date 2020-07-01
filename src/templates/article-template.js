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
    <>
      <article>
        <Layout>
          <MDXRenderer>{body}</MDXRenderer>
        </Layout>
      </article>
    </>
  )
}

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
