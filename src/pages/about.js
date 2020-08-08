import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"
import { FaWrench, FaLink, FaUniversity } from "react-icons/fa"

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
          <AbtTxtCtr>
            <h2>Hi, Im Juan M. Reyes-Ortiz </h2>
            <Underline></Underline>
            <Greet>Software Engineer from Houston, Tx</Greet>
            <ReactMarkdown>{content}</ReactMarkdown>
          </AbtTxtCtr>
          <SklCtr>
            <TtlTxt>
              Skills <FaWrench></FaWrench>
              <Underline />
            </TtlTxt>
            <Skl1>
              <Desc>Programming:</Desc>
              <Cat>
                {/* Iteration for the title stack*/}
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </Cat>
            </Skl1>
            <Skl2>
              <Desc>Tools and Technologies:</Desc>
              <Cat>
                {/* Iteration for the tools stack */}
                {tools.map(item => {
                  return <span key={item.id}>{item.tool}</span>
                })}
              </Cat>
            </Skl2>
            <Skl3>
              <Desc>Back-End:</Desc>
              <Cat>
                {/* Iteration for the stack database*/}
                {databases.map(item => {
                  return <span key={item.id}>{item.database}</span>
                })}
              </Cat>
            </Skl3>
          </SklCtr>
          <EdCtr>
            <TtlTxt>
              Education <FaUniversity></FaUniversity>
              <Underline />
            </TtlTxt>
            <EdUl>
              <EdLi>
                <h4>University of Houston Downtown</h4> Bachelors of Science in
                Computer Science - 2019
              </EdLi>
            </EdUl>
          </EdCtr>
          <LnkCtr>
            <TtlTxt>
              Links <FaLink></FaLink>
              <Underline />
            </TtlTxt>
            <LnkUl>
              <LnkLi>
                <LinkA to="/projects">
                  <Desc>Projects</Desc>
                </LinkA>
              </LnkLi>
              <LnkLi>
                <LinkA to="/blog">
                  <Desc>Blog </Desc>
                </LinkA>
              </LnkLi>
              <LnkLi>
                <LinkA to="/contact">
                  <Desc>Contact Me</Desc>
                </LinkA>
              </LnkLi>
            </LnkUl>
          </LnkCtr>
        </AbtCtr>
      </AboutPage>
    </Layout>
  )
}

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
const AbtTxtCtr = styled.div`
  max-width: 700px;
  margin: auto;
  margin-bottom: 2rem;
`

const LinkA = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
  :hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`

const SklCtr = styled.div`
  max-width: 700px;
  margin: auto;
`
const Skl1 = styled.div`
  margin-top: -1.5rem;
`
const Skl2 = styled.div`
  margin-top: -1.5rem;
`
const Skl3 = styled.div`
  margin-top: -1.5rem;
`

const TtlTxt = styled.h3`
  font-family: ${({ theme }) => theme.secondaryFont};
  margin-bottom: 2.5rem;
`

const Desc = styled.h4`
  font-family: ${({ theme }) => theme.secondaryFont};
`
const Cat = styled.section`
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
    margin-right: 0.7rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    display: inline-block;
    border: 1px solid;
    word-spacing: 5px;
    padding: 0.25rem 0.5rem;
    border-color: ${({ theme }) => theme.stackBorderColor};
    color: ${({ theme }) => theme.stackTextColor};
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`

const LnkCtr = styled.div`
  max-width: 700px;
  margin: auto;
`
const LnkUl = styled.ul`
  margin: 0 auto;
  margin-top: -1.5rem;
  list-style-type: disc;
`
const LnkLi = styled.li`
  margin-bottom: -1rem;
`

const EdCtr = styled.div`
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
  height: 0.15rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
`

export default About
