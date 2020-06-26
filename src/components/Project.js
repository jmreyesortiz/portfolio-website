import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare, FaAndroid } from "react-icons/fa"
import styled from "styled-components"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <Proj data-sal="slide-up" data-sal-duration="1000">
      <ProjImage fluid={image.childImageSharp.fluid} />
      <ProjInfo>
        <ProjNumber>{index + 1}</ProjNumber>
        <ProjTitle>{title}</ProjTitle>
        <ProjDesc>{description}</ProjDesc>
        <ProjStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjStack>
        <ProjLinks>
          <ProjIconLink href={url}>
            <FaGithubSquare />
          </ProjIconLink>
          <ProjIconLink href={github}>
            {stack.map(item => {
              console.log(item.title)
              if (item.title === "Google Play") {
                return <FaAndroid />
              }
            })}
          </ProjIconLink>
        </ProjLinks>
      </ProjInfo>
    </Proj>
  )
}

export default Project

export const Proj = styled.section`
  display: grid;
  margin-bottom: 5rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
`

export const ProjImage = styled(Image)`
  ${Proj}:hover & ::after {
    opacity: 0;
  }
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};
  height: 19rem;
  z-index: 1;

  & ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(
      to bottom left,
      ${({ theme }) => theme.colorPrimary5},
      #222
    );
    transition: ${({ theme }) => theme.transition};
  }

  @media screen and (min-width: 576px) {
    height: 19rem;
  }
  @media screen and (min-width: 768px) {
    height: 22rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1 / 5;
    grid-row: 1 / 1;
    height: 100%;
    width: 100%;
    border-radius: ${({ theme }) => theme.radius};
    /*Todo: need to double check this one */
    box-shadow: ${({ theme }) => theme.darkShadow};
  }
`

export const ProjNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colorPrimary5};
  margin-bottom: 0.75rem;
`
export const ProjTitle = styled.h3`
  font-family: ${({ theme }) => theme.secondaryFont};
`

export const ProjDesc = styled.p`
  margin-bottom: 1.25rem;
  word-spacing: 5px;
  font-family: ${({ theme }) => theme.primaryFont};
  color: ${({ theme }) => theme.colorGrey11};
`
export const ProjStack = styled.section`
  margin-bottom: 1rem;
  span {
    :nth-child(1) {
      border-color: ${({ theme }) => theme.colorPrimary5};
      color: ${({ theme }) => theme.colorPrimary5};
    }
    :nth-child(2) {
      border-color: ${({ theme }) => theme.colorPrimary5};
      color: ${({ theme }) => theme.colorPrimary5};
    }
    margin-right: 0.7rem;
    font-family: ${({ theme }) => theme.secondaryFont};
    display: inline-block;
    border: 1.4px solid;
    word-spacing: 5px;
    border-color: ${({ theme }) => theme.text};
    padding: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-color: ${({ theme }) => theme.text};
    font-weight: lighter;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`
export const ProjInfo = styled.section`
  background: ${({ theme }) => theme.colorGrey10}; /* Background */
  padding: 1rem 2rem;
  border-bottom-left-radius: ${({ theme }) => theme.radius};
  border-bottom-right-radius: ${({ theme }) => theme.radius};
  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    border-radius: ${({ theme }) => theme.radius};
    /*Todo: need to double check this one */
    box-shadow: ${({ theme }) => theme.darkShadow};
    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
`

export const ProjLinks = styled.section``

export const ProjIconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  margin-right: 1rem;
  transition: ${({ theme }) => theme.transition};
  :hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`
