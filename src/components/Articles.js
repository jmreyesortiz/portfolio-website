import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import Article from "../components/Article"

const Articles = ({ articles, title }) => {
  return (
    <Section>
      <Title title={title} />
      {/* Use map for each article. Get key for React key needs, give ...articles as prop. */}
      <ArticlesCenter>
        {articles.map(article => {
          return <Article key={article.id} {...article}></Article>
        })}
      </ArticlesCenter>
    </Section>
  )
}

const Section = styled.section`
  padding: 5rem 0;
`

const ArticlesCenter = styled.div`
  width: 90vw;
  height: 100%;
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

export default Articles
