import React from "react"
import { v4 as uuidv4 } from "uuid"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import styled from "styled-components"

const data = [
  {
    id: uuidv4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: uuidv4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]

const SocialLink = styled.a`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colorGrey1};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colorPrimary5};
  }
`
const SocialLinks = styled.ul`
  justify-items: flex-start;
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`

const links = data.map(link => {
  return (
    <li key={link.id}>
      <SocialLink href={link.url}>{link.icon}</SocialLink>
    </li>
  )
})

export default socialLinks => {
  return <SocialLinks>{links}</SocialLinks>
}
