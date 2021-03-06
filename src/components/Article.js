import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Article = ({ title, image, date, category, slug, desc }) => {
  return (
    <Div>
      <ArticleComp to={`/articles/${slug}`}>
        <ArticleArt>
          <ArticleImage fluid={image.childImageSharp.fluid}></ArticleImage>
          <ArticleCard>
            <h4>{title}</h4>
            <p>{desc}</p>
          </ArticleCard>
          <ArticleFooter>
            <Category>
              <span>{category}</span>
            </Category>
            <Date>{date}</Date>
          </ArticleFooter>
        </ArticleArt>
      </ArticleComp>
    </Div>
  )
}

const Date = styled.p`
  margin-right: 1.25rem;
`
const Div = styled.div`
  padding-bottom: 5rem;
`
const ArticleArt = styled.article`
  background: ${({ theme }) => theme.colorGrey10};
  box-shadow: ${({ theme }) => theme.lightShadow};
`
const ArticleComp = styled(Link)`
  display: block;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius};
  transition: ${({ theme }) => theme.transition};
  :hover {
    box-shadow: ${({ theme }) => theme.darkShadow};
    transform: scale(1.02);
  }
  article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
`

const ArticleImage = styled(Image)`
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};
  height: 15rem;
  @media screen and (min-width: 576px) {
    height: 17.5rem;
  }
  @media screen and (min-width: 850px) {
    height: 13.75rem;
  }
`

const ArticleCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    font-family: ${({ theme }) => theme.secondaryFont};
  }
`

const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
    font-weight: bold;
  }

  p:first-of-type {
    margin-bottom: 1rem;
    span {
      margin-right: 0.7rem;
      font-family: ${({ theme }) => theme.secondaryFont};
      border-color: ${({ theme }) => theme.text};
      display: inline-block;
      border: 1.4px solid;
      word-spacing: 5px;
      padding: 0.2rem;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      font-weight: lighter;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
  }
`

const Category = styled.section`
  span {
    margin-left: 1rem;
    margin-right: 0.7rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    display: inline-block;
    border: 1px solid;
    word-spacing: 5px;
    color: ${({ theme }) => theme.stackBorderColor};
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.stackTextColor};
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`
Article.propTypes = {}
export default Article
