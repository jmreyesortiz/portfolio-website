import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <AboutPage data-sal="zoom-out" data-sal-duration="1000">
        <AboutCenter>
          <AboutImage fluid={image.childImageSharp.fluid}></AboutImage>
          <AboutText>
            <AboutTitle title={title} aboutTitle></AboutTitle>
            <AboutParagraph>{info}</AboutParagraph>
            <AboutStack>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </AboutStack>
          </AboutText>
        </AboutCenter>
      </AboutPage>
    </Layout>
  )
}

const AboutTitle = styled(Title)``
const AboutParagraph = styled.p`
  line-height: 2;
`

const AboutPage = styled.section`
  background: ${({ theme }) => theme.colorGrey10};
  padding: 7rem 0;
`
const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
`
const AboutImage = styled(Image)`
  grid-column: 1 / span 5;
  margin-bottom: 0;
`
const AboutText = styled.article`
  grid-column: 6 / -1;
`
const AboutStack = styled.div`
  span {
    display: inline-block;
    background: ${({ theme }) => theme.colorGrey9};
    color: ${({ theme }) => theme.colorGrey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
