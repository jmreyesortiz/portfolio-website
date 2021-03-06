import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const LogoW = styled.section`
  @media screen and (min-width: 768px) {
    width: 70px;
    margin-bottom: 0.375rem;
  }
  @media screen and (max-width: 768px) {
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoW as={Link} to="/">
      <LogoImage fluid={data.file.childImageSharp.fluid} alt="logo"></LogoImage>
    </LogoW>
  )
}

//Filter for Dark Mode
const LogoImage = styled(Image)`
  -webkit-filter: ${({ theme }) => theme.webKitFilter};
  filter: ${({ theme }) => theme.imageFilter};
`

export default Logo
