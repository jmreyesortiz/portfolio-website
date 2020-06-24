import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"

const Hero = () => {
  return (
    <HeroHeader>
      <HeroCenter>
        <HeroInfo>
          <div>
            <Underline></Underline>
            <h1>I'm Juan Reyes Ortiz</h1>
            <h4>Web Developer and Android Developer</h4>
            <HeroButton>Click</HeroButton>
            <SocialLinks color="white" />
          </div>
        </HeroInfo>
      </HeroCenter>
    </HeroHeader>
  )
}

const H4 = styled.h4`
  @media screen and (min-width: 992px) {
    h4 {
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 1170px) {
    .hero h4 {
      font-size: 1rem;
    }
  }
`

const HeroHeader = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${({ theme }) => theme.colorPrimary3};
  position: relative;
  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.colorWhite};
    }
  }
  @media screen and (min-width: 1170px) {
    font-size: 1rem;
  }
`
const HeroCenter = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    width: 95vw;
  }
`
const HeroInfo = styled.article`
  background: ${({ theme }) => theme.colorPrimary3};
  h4 {
    color: ${({ theme }) => theme.colorGrey5};
  }
  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  @media screen and (min-width: 1170px) {
    grid-column: 1 / span 8;
  }
`
const Underline = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 0;

  margin-right: auto;
  width: 5rem;
  height: 0.25rem;

  background: ${({ theme }) => theme.colorPrimary5};
`
const HeroButton = styled.button`
  margin-top: 1.25rem;
`

export default Hero
