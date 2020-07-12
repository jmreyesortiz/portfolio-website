import React from "react"
import styled from "styled-components"

// Series of Titles used in according to their need.

const Title = ({ title, aboutTitle, articleTitle }) => {
  if (aboutTitle) {
    return (
      <AboutTitle>
        <AboutTitleTxt>{title || "default title"}</AboutTitleTxt>
        <AboutUnderline></AboutUnderline>
      </AboutTitle>
    )
  } else if (articleTitle) {
    return (
      <ArticleTitle>
        <ArticleHeader>{title || "default title"}</ArticleHeader>
      </ArticleTitle>
    )
  } else {
    return (
      <SectionTitle>
        <DefaultTitle>{title || "default title"}</DefaultTitle>
        <Underline></Underline>
      </SectionTitle>
    )
  }
}

const ArticleTitle = styled.section`
  text-align: center;
`

const SectionTitle = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`
const AboutTitle = styled(SectionTitle)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
`

const ArticleHeader = styled.h2`
  font-family: ${({ theme }) => theme.primaryFont};
`
const DefaultTitle = styled.h2`
  font-family: ${({ theme }) => theme.secondaryFont};
`
const AboutTitleTxt = styled.h2`
  font-family: ${({ theme }) => theme.secondaryFont};
`
const Underline = styled.section`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
  margin-left: auto;
  margin-right: auto;
`

const AboutUnderline = styled(Underline)`
  margin-left: 0;
  margin-right: 0;
`
export default Title
