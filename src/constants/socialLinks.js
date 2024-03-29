import React from "react"
import { v4 as uuidv4 } from "uuid"
import { FaLinkedin, FaGithub, FaMedium, FaTwitterSquare } from "react-icons/fa"
import styled from "styled-components"
import { keyframes } from "styled-components"

//Social Media information utilized all over the app
// UUidv4 utilized to provide a unique ID

const SocialLinks = ({ color, toggleAnimation, isSideBar }) => {
  if (toggleAnimation) {
    return (
      <BaseAnimation isSideBar={isSideBar}>
        {(toggleAnimation, Links(data, color))}
      </BaseAnimation>
    )
  } else {
    return <SocLinks>{(toggleAnimation, Links(data, color))}</SocLinks>
  }
}

const data = [
  {
    id: uuidv4(),
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/juanmareyesortiz/",
  },
  {
    id: uuidv4(),
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/jmreyesortiz",
  },
  // {
  //   id: uuidv4(),
  //   icon: <FaMedium className="social-icon"></FaMedium>,
  //   url: "https://medium.com/@jmreyesortiz/",
  // },
  {
    id: uuidv4(),
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/jmreyesortiz",
  },
]

const SocialLink = styled.a`
  ${props => {
    const newColor = props.defineColor
    if (newColor === "white") {
      return { color: props.theme.colorHeader }
    } else {
      return { color: props.theme.text }
    }
  }};
  ${props => {
    const newColor = props.defineColor
    if (newColor === "white") {
      return { color: props.theme.colorHeader }
    } else {
      return { color: props.theme.text }
    }
  }};

  font-size: 1.75rem;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`
const slideUp = keyframes`
 0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const SocLinks = styled.ul`
  padding-left: 0;
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`
const BaseAnimation = styled(SocLinks)`
  margin-left: ${props => (props.isSideBar ? "2rem" : "0rem")};

  li {
    opacity: 0;
    animation: ${slideUp} 0.5s ease-in-out 0.3s forwards;
  }
  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`
function Links(data, color) {
  return data.map(link => {
    return (
      <li key={link.id}>
        <SocialLink defineColor={color} href={link.url}>
          {link.icon}
        </SocialLink>
      </li>
    )
  })
}

export default SocialLinks
