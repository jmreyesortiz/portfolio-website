import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "../components/Title"
import SEO from "../components/SEO"
const ComponentName = ({ data }) => {
  const { body } = data.article.childStrapiArticlesContent.childMdx
  const { title } = data.article
  const { date } = data.article
  const { category } = data.article
  const { desc } = data.article

  return (
    <Layout>
      <SEO title={title} description={desc}></SEO>
      <Div>
        <Wrapper>
          <ArtTitle articleTitle={true} title={title}></ArtTitle>
          <Information>
            <Author>Juan Reyes</Author>
            <Separator> | </Separator>
            <Date> {date} </Date>
            <Separator> | </Separator>
            <Category> {category} </Category>
          </Information>
          <Underline></Underline>
          <MDXRenderer>{body}</MDXRenderer>
        </Wrapper>
      </Div>
    </Layout>
  )
}

const Separator = styled.h4`
  color: ${({ theme }) => theme.colorPrimary5};
`
const Underline = styled.section`
  width: 25rem;
  height: 0.15rem;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
  margin-left: auto;
  margin-right: auto;
`

const ArtTitle = styled(Title)`
  .section {
    margin-bottom: 0rem;
  }
`
const Information = styled.div`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  display: flex;
  margin-top: 4rem;
  height: 100%rem;
  background: ${({ theme }) => theme.colorGrey10};
`

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colorGrey10};
  width: 90vw;
  max-width: 700px;
  margin: 4rem auto;
`

const Category = styled.h4``
const Author = styled.h4``
const Date = styled.h4``

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticles(slug: { eq: $slug }) {
      childStrapiArticlesContent {
        childMdx {
          body
        }
      }
      title
      date
      category
      desc
    }
  }
`

export default ComponentName
