import React from "react"
import styled from "styled-components"

const Title = ({ title, aboutTitle }) => {
  if (aboutTitle) {
    return (
      <AboutTitle>
        <DefaultTitle>{title || "default title"}</DefaultTitle>
        <AboutUnderline></AboutUnderline>
      </AboutTitle>
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

const SectionTitle = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`
const AboutTitle = styled(SectionTitle)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
`

const DefaultTitle = styled.h2``
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
