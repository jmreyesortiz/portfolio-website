import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"
import Particles from "react-particles-js"

const Hero = () => {
  return (
    <>
      <HeroHeader>
        <Part
          params={{
            fps_limit: 60,
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            links: {
              color: "#F4FF81",
            },
            particles: {
              value: ["#ffffff", "#1254ef"],
              color: "#F4FF81",
              number: {
                value: 70,
              },
              size: {
                value: 1,
              },
            },

            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "push",
                },
              },
            },
          }}
        ></Part>
        <HeroInfo>
          <HeroCenter>
            <HeroSection>
              <Underline></Underline>
              <H2>I'm Juan Reyes Ortiz</H2>
              <h4>Software Engineer</h4>
              <HeroButton>About Me</HeroButton>
              <SocialLinks color="white" />
            </HeroSection>
          </HeroCenter>
        </HeroInfo>
      </HeroHeader>
    </>
  )
}

const H2 = styled.h2`
  color: ${({ theme }) => theme.colorPrimary5};
  font-size: 70px;
  width: 20rem;

  @media screen and (min-width: 992px) {
    width: 100%;
  }

  @media screen and (min-width: 1170px) {
    width: 100%;
  }
`
const HeroSection = styled.section`
  width: 100vh;
`
const Part = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100vh;
`

const HeroHeader = styled.header`
  height: 100vh;
  position: relative;

  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: relative;
    }
    h4 {
      font-size: 0.85rem;
      line-height: 1;
    }
  }

  @media screen and (min-width: 1170px) {
    font-size: 1rem;
  }
`
const HeroCenter = styled.section`
  position: relative;
  height: 100%;
  display: grid;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: repeat(12, 1fr);
  }
`
const HeroInfo = styled.article`
  margin-left: 8rem;
  margin-top: 14rem;
  position: absolute;
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
const Underline = styled.section`
  margin-right: auto;
  margin-bottom: 0.5rem;
  margin-left: 0;
  width: 5rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
`
const HeroButton = styled.button`
  margin-top: 1.25rem;
`

export default Hero
