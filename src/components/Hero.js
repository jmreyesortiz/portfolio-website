import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"
import Part from "react-particles-js"

const Hero = () => {
  return (
    <HeroHeader>
      <Particles
        params={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 500 } },
            color: { value: "#10d7bf" },
            shape: {
              type: "circle",
              stroke: { width: 1, color: "#00ffd1" },
              polygon: { nb_sides: 5 },
              image: {
                src:
                  "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.04734885849793636,
              random: true,
              anim: {
                enable: true,
                speed: 3.9160839160839163,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3.945738208161363,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#04c9e3",
              opacity: 0.8,
              width: 1.1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "left",
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
      />
      <HeroCenter>
        <HeroInfo>
          <div>
            <Underline></Underline>
            <H1>Juan Reyes Ortiz</H1>
            <H4>Web Developer and Android Developer</H4>
            <HeroButton to="/about">About Me</HeroButton>
            <SocialLinks color="white" />
          </div>
        </HeroInfo>
      </HeroCenter>
    </HeroHeader>
  )
}

const H1 = styled.h1`
  color: ${({ theme }) => theme.colorPrimary5};
`

const Particles = styled(Part)`
  position: absolute;
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 90vh;

  @media screen and (max-width: 992px) {
    height: 80vh;
    opacity: 0;
  }
`

const H4 = styled.h4`
  color: ${({ theme }) => theme.colorPrimary4};
`

const HeroHeader = styled.header`
  background: ${({ theme }) => theme.background};

  height: 100vh;

  @media screen and (min-width: 992px) {
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
    width: 95vw;
  }
`
const HeroInfo = styled.article`
  position: relative;
  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  @media screen and (min-width: 1170px) {
    grid-column: 1 / span 8;
  }
`
const Underline = styled.div`
  margin-bottom: -1rem;
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
