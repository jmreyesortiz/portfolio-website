import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const LogoW = styled.div``

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
