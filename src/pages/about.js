import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"
import ReactMarkdown from "react-markdown"
import { FaWrench, FaCode, FaLink } from "react-icons/fa"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { stack, content, tools, databases } = nodes[0]
  return (
    <Layout>
      <SEO
        title="About | Juan M. Reyes-Ortiz"
        description="About Page jmreyesortiz.com"
      />

      <AboutPage>
        <AboutCenter>
          <AboutText>
            <h2>Hi, Im Juan M. Reyes-Ortiz </h2>
            <Underline></Underline>
            <h4>Software Engineer from Houston, Tx</h4>
            <ReactMarkdown>{content}</ReactMarkdown>
          </AboutText>
          <SkillsDiv>
            <h3>
              Skills <FaWrench></FaWrench>
            </h3>
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
          <LinksCenter>
            <h3>
              Links <FaLink></FaLink>
            </h3>
            <LinksLu>
              <LinksLi>
                <LinkA href="/projects">
                  <h4>Projects</h4>
                </LinkA>
              </LinksLi>
              <LinksLi>
                <LinkA href="/blog">
                  <h4>Blog </h4>
                </LinkA>
              </LinksLi>
              <LinksLi>
                <LinkA href="/contact">
                  <h4>Contact Me</h4>
                </LinkA>
              </LinksLi>
            </LinksLu>
          </LinksCenter>
        </AboutCenter>
      </AboutPage>
    </Layout>
  )
}

const LinkA = styled(Link)`
  text-decoration: underline;

  color: ${({ theme }) => theme.text};
  :hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`
const LinksLu = styled.ul`
  margin-top: -1rem;
  list-style-type: disc;
`
const LinksLi = styled.li``

const SkillsDiv = styled.div`
  margin-top: -1rem;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;

  @media screen and (min-width: 992px) {
    margin-top: -1rem;
    display: grid;
    align-items: center;
    column-gap: 1rem;
  }
`
const Skills1 = styled.div`
  margin-top: -1rem;
  grid-column: 1 / 3;
`
const Skills2 = styled.div`
  grid-column: 1/ 3;
  margin-top: -2rem;
`
const Skills3 = styled.div`
  grid-column: 1 / 3;
  margin-top: -2rem;
`

const Desc = styled.h4`
  font-family: ${({ theme }) => theme.primaryFont};
`
const Category = styled.section`
  margin-bottom: 1rem;
  span {
    :nth-child(1) {
      border-color: ${({ theme }) => theme.stackTextColor};
      color: ${({ theme }) => theme.stackBorderColor};
    }
    :nth-child(2) {
      border-color: ${({ theme }) => theme.stackTextColor};
      color: ${({ theme }) => theme.stackBorderColor};
    }
    margin-right: 0.7rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    display: inline-block;
    border: 1px solid;
    word-spacing: 5px;
    color: ${({ theme }) => theme.stackTextColor};
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.stackBorderColor};
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`
const AboutPage = styled.section`
  display: grid;
  background: ${({ theme }) => theme.colorGrey10};
  padding: 4rem 0;
  margin-top: 2rem;
  text-align: justify;
  align-items: center;
  width: 100%;
`
const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  @media screen and (min-width: 992px) {
    margin-left: 40rem;
    align-items: center;
    column-gap: 2rem;
    width: 95vw;
  }
`
const LinksCenter = styled(AboutCenter)`
  margin-top: -1rem;
  grid-column: 1 / 3;

  @media screen and (min-width: 992px) {
    margin-left: 40rem;
    align-items: center;
    column-gap: 2rem;
    width: 95vw;
    margin-left: 0;
  }
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
