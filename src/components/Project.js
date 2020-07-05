import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaGooglePlay } from "react-icons/fa"
import styled from "styled-components"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <Proj data-sal="slide-up" data-sal-duration="1000">
      <Parent>
        <Child>
          <ProjImage fluid={image.childImageSharp.fluid} />
        </Child>
      </Parent>
      <ProjInfo>
        <ProjNumber>{index + 1}</ProjNumber>
        <ProjTitle>{title}</ProjTitle>
        <ProjDescription>{description}</ProjDescription>
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
              if (item.title === "Google Play") {
                return <FaGooglePlay key={item.id} />
              }
              return null
            })}
          </ProjIconLink>
        </ProjLinks>
      </ProjInfo>
    </Proj>
  )
}

export default Project

export const Child = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  /* fallback color */

  &::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Parent = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};
  height: 19rem;
  z-index: 1;
  overflow: hidden;
  position: relative;

  display: inline-block;
  :hover ${Child} {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  :focus ${Child} {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  :hover ${Child}:before {
    display: block;
  }
  :focus ${Child}:before {
    display: block;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 20px 0px;
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
    box-shadow: ${({ theme }) => theme.darkShadow};
  }
`

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

export const ProjDescription = styled.p`
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
    padding: 0.25rem 0.5rem;
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
  color: ${({ theme }) => theme.colorPrimary5};
  font-size: 2rem;
  margin-right: 1rem;
  transition: ${({ theme }) => theme.transition};
  :hover {
    color: ${({ theme }) => theme.buttonStackColor};
  }
`
