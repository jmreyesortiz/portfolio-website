import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Div data-sal="slide-up" data-sal-duration="1000">
      <BlogComp to={`/blogs/${slug}`}>
        <article>
          <BlogImage fluid={image.childImageSharp.fluid}></BlogImage>
          <BlogCard>
            <h4>{title}</h4>
            <p>{desc}</p>
          </BlogCard>
          <BlogFooter>
            <p>{category}</p>
            <Date>{date}</Date>
          </BlogFooter>
        </article>
      </BlogComp>
    </Div>
  )
}

const Date = styled.p`
  margin-right: 1.25rem;
`
const Div = styled.div`
  padding-bottom: 5rem;
`

const BlogComp = styled(Link)`
  display: block;
  height: 100%;

  background: ${({ theme }) => theme.colorGrey10};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.lightShadow};
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
  p {
    color: ${({ theme }) => theme.text};
  }
`

const BlogImage = styled(Image)`
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

const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.text};
  }
`

const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  p:first-of-type {
    margin-left: 1.25rem;
    display: inline-block;
    background: ${({ theme }) => theme.colorGrey9};
    color: ${({ theme }) => theme.colorGrey5};
    margin-right: 1.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`
Blog.propTypes = {}
export default Blog
