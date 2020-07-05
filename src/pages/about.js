import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import SEO from "../components/SEO"
import ReactMarkdown from "react-markdown"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image, content, tools, databases } = nodes[0]
  return (
    <Layout>
      <SEO
        title="About | Juan M. Reyes-Ortiz"
        description="About Page jmreyesortiz.com"
      />
      <div data-sal="zoom-out" data-sal-duration="1000">
        <AboutPage>
          <AboutCenter>
            <AboutText>
              <h2>Hi, Im Juan M. Reyes-Ortiz </h2>
              <Underline></Underline>
              <h4>Software Engineer from Houston, Tx</h4>
              <ReactMarkdown>{content}</ReactMarkdown>
            </AboutText>
          </AboutCenter>
          <SkillsDiv>
            <Skills1>
              <Desc>Programming:</Desc>
              <Category>
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </Category>
            </Skills1>
            <Skills2>
              <Desc>Tools and Technologies:</Desc>
              <Category>
                {tools.map(item => {
                  return <span key={item.id}>{item.tool}</span>
                })}
              </Category>
            </Skills2>
            <Skills3>
              <Desc>Databases:</Desc>
              <Category>
                {databases.map(item => {
                  return <span key={item.id}>{item.database}</span>
                })}
              </Category>
            </Skills3>
          </SkillsDiv>
        </AboutPage>
      </div>
    </Layout>
  )
}

const SkillsDiv = styled.section`
  width: 45rem;
  margin: 0 auto;
  max-width: 1170px;
  margin-bottom: 2rem;
  @media screen and (min-width: 992px) {
    display: grid;
    align-items: center;
    column-gap: 4rem;
  }
`
const Skills1 = styled.div`
  grid-column: 1 / 3;
`
const Skills2 = styled.div`
  grid-column: 1/ 3;
`
const Skills3 = styled.div`
  grid-column: 1 / 3;
`

const Desc = styled.h4`
  font-family: ${({ theme }) => theme.primaryFont};
`
const Category = styled.section`
  span {
    margin-right: 0.5rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.text};
    display: inline;
    border: 1.4px solid;
    word-spacing: 5px;
    border-color: ${({ theme }) => theme.text};
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.text};
    font-weight: lighter;
    font-size: 0.9rem;
  }
`
const AboutPage = styled.section`
  background: ${({ theme }) => theme.colorGrey10};
  padding: 7rem 0;
  margin-top: 2rem;
  min-height: calc(100vh - 12rem - 11rem);
`
const AboutCenter = styled.div`
  width: 45rem;

  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    display: grid;
    align-items: center;
    column-gap: 2rem;
  }
`

const AboutImage = styled(Image)`
  grid-column: 1 / 3;
  margin-bottom: 0;
`
const AboutText = styled.article`
  grid-column: 1 / 3;
`

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        databases {
          id
          database
        }
        tools {
          id
          tool
        }
        stack {
          id
          title
        }
        title
        info
        content
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

const Underline = styled.section`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
`

export default About
