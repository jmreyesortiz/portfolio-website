import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
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
            <FaShareSquare />
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
    /*
    :nth-of-type(even) & ::after{ProjImage}{
      
        grid-column: 5 / -1;
        grid-row: 1 / 1;
      
    
    }
  
  */
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

export const ProjNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colorPrimary5};
  margin-bottom: 0.75rem;
`
export const ProjTitle = styled.h3``

export const ProjDesc = styled.p`
  margin-bottom: 1.25rem;
  word-spacing: 15px;
  color: ${({ theme }) => theme.colorGrey3};
`
export const ProjStack = styled.section`
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
export const ProjInfo = styled.section`
  background: ${({ theme }) => theme.colorWhite};
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
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: ${({ theme }) => theme.transition};
  :hover {
    color: ${({ theme }) => theme.colorPrimary1};
  }
`
