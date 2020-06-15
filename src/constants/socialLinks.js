import React from "react"
import { v4 as uuidv4 } from "uuid"
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from "react-icons/fa"
import styled from "styled-components"

const SocialLinks = ({ color }) => {
  return (
    <>
      <SocLinks>{Links(data, color)}</SocLinks>
    </>
  )
}

const data = [
  {
    id: uuidv4,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]

const SocialLink = styled.a`
  ${props => {
    const newColor = props.defineColor
    if (newColor === "white") {
      return { color: props.theme.colorWhite }
    } else {
      return { color: props.theme.colorPrimary7 }
    }
  }};
  font-size: 1.75rem;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`

const SocLinks = styled.ul`
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`

function Links(data, color) {
  return data.map(link => {
    return (
      <li key={link.id}>
        {console.log("col" + color)}
        <SocialLink defineColor={color} href={link.url}>
          {link.icon}
        </SocialLink>
      </li>
    )
  })
}

export default SocialLinks
