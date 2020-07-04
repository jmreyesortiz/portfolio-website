import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import SEO from "../components/SEO"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <SEO
        title="About | Juan M. Reyes-Ortiz"
        description="About Page jmreyesortiz.com"
      />
      <div data-sal="zoom-out" data-sal-duration="1000">
        <AboutPage>
          <AboutCenter>
            <AboutImage fluid={image.childImageSharp.fluid}></AboutImage>
            <AboutText>
              <AboutTitle title={title} aboutTitle></AboutTitle>
              <AboutParagraph>{info}</AboutParagraph>
              <Category>
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </Category>
            </AboutText>
          </AboutCenter>
        </AboutPage>
      </div>
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
  min-height: calc(100vh - 5rem - 9rem);
`
const AboutCenter = styled.div`
  min-height: calc(100vh - 5rem - 9rem);
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

const Category = styled.section`
  span {
    margin-right: 0.5rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.text};
    display: inline-block;
    border: 1.4px solid;
    word-spacing: 5px;
    border-color: ${({ theme }) => theme.text};
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.text};
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
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
