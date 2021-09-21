import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"
import { dataLinks } from "../constants/mainTech"
import Acc from "../components/Accordion"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const ReactMarkdown = require("react-markdown")
  const { stack, tools, databases, content } = nodes[0]

  return (
    <Layout>
      <SEO
        title="About | Juan M. Reyes-Ortiz"
        description="About Page jmreyesortiz.com"
      />
      <AboutPage>
        <AbtCtr>
          <AboutTextCenter>
            <h2>Hi, Im Juan M. Reyes-Ortiz </h2>
            <Underline></Underline>
            <Greet>Software Engineer from Houston, Tx</Greet>
            <ReactMarkdown>{content}</ReactMarkdown>
            <SkillText>
              Tech I've been working with
              <Underline />
            </SkillText>
            <TechGrid>
              {dataLinks.map(item => {
                return (
                  <MainCategory>
                    <span key={item.id}>{item.text}</span>
                  </MainCategory>
                )
              })}
            </TechGrid>

            <SkillText>
              More About Me
              <Underline />
            </SkillText>

            <Accordion title="Skills">
              <Skill>
                <Description>Programming Languages:</Description>
                <Category>
                  {/* Iteration for the title stack*/}
                  {stack.map(item => {
                    return <span key={item.id}>{item.title}</span>
                  })}
                </Category>
              </Skill>
              <Skill>
                <Description>Frameworks and Tools:</Description>
                <Category>
                  {/* Iteration for the tools stack */}
                  {tools.map(item => {
                    return <span key={item.id}>{item.tool}</span>
                  })}
                </Category>
              </Skill>
              <Skill>
                <Description>IDE’s and other technologies:</Description>
                <Category>
                  {/* Iteration for the stack database*/}
                  {databases.map(item => {
                    return <span key={item.id}>{item.database}</span>
                  })}
                </Category>
              </Skill>
            </Accordion>
            <Accordion title="Education">
              <EducationCenter>
                {/* <SkillText>
                  Education <FaUniversity></FaUniversity>
                  <Underline />
                </SkillText> */}
                <EdUl>
                  <EdLi>
                    <h4>University of Houston Downtown</h4> Bachelors of Science
                    in Computer Science - 2019
                  </EdLi>
                </EdUl>
              </EducationCenter>
            </Accordion>
            <Accordion title="Links">
              <LnkUl>
                <LnkLi>
                  <LinkTo to="/projects">
                    <MoreLinks>Projects</MoreLinks>
                  </LinkTo>
                </LnkLi>
                <LnkLi>
                  <LinkTo to="/blog">
                    <MoreLinks>Blog </MoreLinks>
                  </LinkTo>
                </LnkLi>
                <LnkLi>
                  <LinkTo to="/contact">
                    <MoreLinks>Contact Me</MoreLinks>
                  </LinkTo>
                </LnkLi>
              </LnkUl>
            </Accordion>
          </AboutTextCenter>
        </AbtCtr>
      </AboutPage>
    </Layout>
  )
}

const Accordion = styled(Acc)`
  margin-top: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
`

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
`

const Greet = styled.h4`
  font-family: ${({ theme }) => theme.secondaryFont};
`
const AboutPage = styled.section`
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;
  margin-top: 1rem;
`
const AbtCtr = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    column-gap: 2rem;
    width: 95vw;
  }
`
const AboutTextCenter = styled.div`
  max-width: 43.5em;
  margin: auto;
  margin-bottom: 2rem;
`

const LinkTo = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
  :hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`

// const SkillsCenter = styled.div`
//   max-width: 43.5em;
//   margin: auto;
// `
const Skill = styled.div`
  margin-top: -1.5rem;
`
const SkillText = styled.h3`
  font-family: ${({ theme }) => theme.secondaryFont};
  margin-bottom: 3rem;
  font-size: 1.8rem;
`

const Description = styled.h4`
  font-family: ${({ theme }) => theme.secondaryFont};
`

const MoreLinks = styled.h4`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 1.5rem;
`

const Category = styled.section`
  margin-bottom: 1rem;
  span {
    :nth-child(1) {
      border-color: ${({ theme }) => theme.stackTextColor2};
      color: ${({ theme }) => theme.stackBorderColor2};
    }
    :nth-child(2) {
      border-color: ${({ theme }) => theme.stackTextColor2};
      color: ${({ theme }) => theme.stackBorderColor2};
    }
    :nth-child(3) {
      border-color: ${({ theme }) => theme.stackTextColor2};
      color: ${({ theme }) => theme.stackBorderColor2};
    }
    margin-right: 0.7rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    display: inline-block;
    border: 1px solid;
    word-spacing: 5px;
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.stackBorderColor};
    color: ${({ theme }) => theme.stackTextColor};
    font-weight: lighter;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`

// const LnkCtr = styled.div`
//   max-width: 700px;
//   margin: auto;
// `
const LnkUl = styled.ul`
  margin: 0 auto;
  margin-top: -1.5rem;
  list-style-type: disc;
`
const LnkLi = styled.li`
  margin-bottom: -1rem;
`

const EducationCenter = styled.div`
  max-width: 700px;
  margin: auto;
  margin-bottom: 3rem;
`
const EdUl = styled.ul`
  margin: 0 auto;
  margin-top: -1.5rem;
  list-style-type: disc;
`

const EdLi = styled.li`
  margin-bottom: -1rem;
`

const MainCategory = styled.section`
  margin-bottom: 1rem;
  margin-right: 0.7rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  display: inline-block;
  border: 2px solid;
  word-spacing: 5px;
  padding: 0.25rem 0.5rem;
  border-color: ${({ theme }) => theme.stackTextColor2};
  color: ${({ theme }) => theme.stackBorderColor2};
  font-weight: medium;
  font-size: 1.1rem;
  margin-bottom: 1rem;
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
  height: 0.2rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
`

export default About
