import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const LogoW = styled.div`
  @media screen and (min-width: 768px) {
    width: 80px;
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
      <Image fluid={data.file.childImageSharp.fluid} alt="logo"></Image>
    </LogoW>
  )
}

export default Logo
