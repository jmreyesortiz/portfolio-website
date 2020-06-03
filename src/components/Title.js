import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <SectionTitle>
      <DefaultTitle>{title || "default title"}</DefaultTitle>
      <Underline></Underline>
    </SectionTitle>
  )
}

const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const DefaultTitle = styled.h2``
const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
`

export default Title
