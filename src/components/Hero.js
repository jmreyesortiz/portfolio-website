import React from "react"
import styled from "styled-components"
import Links from "../constants/SocialLinks"
import Particles from "react-particles-js"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const Hero = () => {
  // Using Context to get the Theme
  const themeContext = useContext(ThemeContext)
  console.log("Current theme: ", themeContext)
  const color = themeContext.colorPrimary1

  return (
    <HeroDiv>
      <HeroHeader>
        <Part
          params={{
            particles: {
              number: {
                value: 80,
                density: { enable: false, value_area: 800 },
              },
              color: { value: "#03a78a" },
              shape: {
                type: "circle",
                stroke: { width: 1, color: "#00fff0" },
                polygon: { nb_sides: 3 },
                image: { src: "", width: 100, height: 100 },
              },
              opacity: {
                value: 0.12626362266116362,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: true },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 2.4362316369040378,
                  size_min: 0,
                  sync: true,
                },
              },
              line_linked: {
                enable: true,
                distance: 176.37532669520735,
                color: "#2eb9b9",
                opacity: 0.6786669718037545,
                width: 1.8939543399174543,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "right",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: false, mode: "grab" },
                onclick: { enable: false, mode: "repulse" },
                resize: true,
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
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
    </HeroDiv>
  )
}

const HeroDiv = styled.div`
  background: linear-gradient(145deg, #0d1221, #2c3184);
`
const Part = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`
const SocialLinks = styled(Links)``
const H2 = styled.h2`
  color: ${({ theme }) => theme.colorPrimary5};
  font-size: 40px;
  width: 20rem;

  @media screen and (min-width: 992px) {
    font-size: 70px;
    width: 100%;
  }

  @media screen and (min-width: 1170px) {
    font-size: 70px;
    width: 100%;
  }
`
const HeroSection = styled.section`
  width: 100vh;
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
  margin-top: 10rem;
  position: absolute;
  h4 {
    color: ${({ theme }) => theme.colorGrey5};
  }
  @media screen and (min-width: 992px) {
    margin-top: 10rem;
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  @media screen and (min-width: 1170px) {
    margin-top: 10rem;
    grid-column: 1 / span 8;
  }
`
const Underline = styled.section`
  margin-right: auto;
  margin-bottom: 0.25rem;
  margin-left: 0;
  width: 5rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colorPrimary5};
`
const HeroButton = styled.button`
  margin-top: 1.25rem;
`

export default Hero
