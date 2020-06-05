import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import Blog from "../components/Blog"
const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Section>
      <Title title={title} />
      <BlogsCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog}></Blog>
        })}
      </BlogsCenter>
    </Section>
  )
}

const Section = styled.section`
  padding: 5rem 0;
`
const BlogsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

export default Blogs
