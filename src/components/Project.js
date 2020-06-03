import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <Proj>
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
          <ProjIcon>
            <ProjIconLink href={github}>
              <FaGithubSquare />
            </ProjIconLink>
          </ProjIcon>
          <ProjIcon>
            <ProjIconLink href={github}>
              <FaShareSquare />
            </ProjIconLink>
          </ProjIcon>
        </ProjLinks>
      </ProjInfo>
    </Proj>
  )
}

export default Project

const Proj = styled.div`
  display: grid;
  margin-bottom: 5rem;

  :hover {
    & ::after ${ProjImage} {
      opacity: 0;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    /*
    :nth-of-type(even) {
       {
        opacity: 0;
      }
    }
    */
  }
`

const ProjImage = styled(Image)`
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
    opacity: 0.85;
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
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: ${({ theme }) => theme.radius};
    /*Todo: need to double check this one */
    box-shadow: ${({ theme }) => theme.darkShadow};
  }
`

const ProjNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colorPrimary5};
  margin-bottom: 0.75rem;
`
const ProjTitle = styled.h3``

const ProjDesc = styled.span`
  word-spacing: 15px;
  color: ${({ theme }) => theme.colorGrey3};
`
const ProjStack = styled.div`
  margin-bottom: 1rem;
  span {
    display: inline-block;
    background: ${({ theme }) => theme.colorGrey9};
    color: ${({ theme }) => theme.colorGrey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radius};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.75rem;
  }
`
const ProjInfo = styled.div`
  background: ${({ theme }) => theme.white};
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

const ProjLinks = styled.div``

const ProjIcon = styled.div``

const ProjIconLink = styled.a`
  color: ${({ theme }) => theme.colorPrimary5};
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: ${({ theme }) => theme.transition};
  :hover {
    color: ${({ theme }) => theme.colorPrimary1};
  }
`
