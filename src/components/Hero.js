import React from "react"
import styled from "styled-components"
import Links from "../constants/sociallinks"
// import Particles from "react-tsparticles"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <HeroHeader>
      {/* Particles Component with the right speficiations*/}
      {/* <Partt
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 200,
            limit: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 1,
              speed: 2
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image: "url('https://particles.js.org/images/background3.jpg')"
        }
      }} */}
      {/* /> */}
      <HeroCenter>
        <HeroInfo>
          <div>
            <Underline></Underline>
            <Name>Juan Reyes-Ortiz</Name>
            <H4>Software Engineer</H4>
            <Link to="/about">
              <HeroButton>About Me</HeroButton>
            </Link>
            <Links isSideBar={false} color="white" />
          </div>
        </HeroInfo>
      </HeroCenter>
    </HeroHeader>
  )
}

const Name = styled.h1`
  color: ${({ theme }) => theme.colorHeader};
  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`
const H4 = styled.h4`
  color: ${({ theme }) => theme.colorHeader};
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
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
// Particles component positioning
// const Partt = styled(Particles)`
//   position: absolute;
//   margin-top: -5rem;
//   padding-top: 5rem;
//   align-items: center;
//   width: 100%;
//   margin: 0 auto;
//   height: 70vh;

//   @media screen and (max-width: 992px) {
//     height: 65vh;
//     opacity: 1;
//   }
// `
const HeroHeader = styled.header`
  background: ${({ theme }) => theme.background};
  height: 80vh;

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
const HeroButton = styled.button`
  margin-top: 1.25rem;
`

export default Hero
