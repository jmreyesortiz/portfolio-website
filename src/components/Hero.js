import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <HeroHeader>
      <HeroCenter>
        <HeroInfo>
          <div>
            <Underline>
              <h1>I'm Juan Reyes Ortiz</h1>
              <h4>Web Developer and Android Developer</h4>
              <Button>Click</Button>
            </Underline>
          </div>
        </HeroInfo>
      </HeroCenter>
    </HeroHeader>
  )
}

const HeroHeader = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  position: relative;
`
const HeroCenter = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
`
const HeroInfo = styled.article``
const Underline = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 0;
`
const Button = styled.button``

export default Hero
