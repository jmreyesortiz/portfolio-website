import React from "react"
import { Link } from "gatsby"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { keyframes } from "styled-components"

const data = [
  {
    id: uuidv4,
    text: "home",
    url: "/",
  },
  {
    id: uuidv4,
    text: "about",
    url: "/about/",
  },
  {
    id: uuidv4,
    text: "projects",
    url: "/projects/",
  },
  {
    id: uuidv4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: uuidv4,
    text: "contact",
    url: "/contact/",
  },
]

const Links = ({ sideLinks, toggleAnimation }) => {
  return func1(sideLinks, toggleAnimation)
}

const SideLinks = styled.ul`
  li {
    background-color: blue;
    opacity: 0;
  }
  li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.secondaryFont};
    color: ${({ theme }) => theme.colorGrey5};
    letter-spacing: ${({ theme }) => theme.spacing};
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.radius};
  }
  li a:hover {
    background: ${({ theme }) => theme.colorPrimary9};
    color: ${({ theme }) => theme.colorPrimary5};
  }
  /* Animations */
`
const SideLinksAnimations = styled(SideLinks)`
  li {
    opacity: 1;
    background-color: red;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  &li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  &li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  &li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  &li:nth-of-type(4) {
    animation-delay: 1s;
  }
  &li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`
const slideRight = keyframes`
 0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}`
const LinkLi = styled.li``
const Animation = styled(LinkLi)`
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
  opacity: 1;

  ${Link}:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  :nth-of-type(2) {
    animation-delay: 0.5s;
  }
  :nth-of-type(3) {
    animation-delay: 0.75s;
  }
  :nth-of-type(4) {
    animation-delay: 1s;
  }
  :nth-of-type(5) {
    animation-delay: 1.25s;
  }
`

const NavLinks = styled.ul`
  li {
    opacity: 1;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    li {
      margin-right: 2rem;
    }
    a {
      color: ${({ theme }) => theme.colorGrey1};
      font-weight: bold;
      font-size: x-large;
      font-family: ${({ theme }) => theme.secondaryFont};
      letter-spacing: ${({ theme }) => theme.spacing};
      transition: ${({ theme }) => theme.transition};
      padding: 0.5rem 0;
      color: ${({ theme }) => theme.colorPrimary};
    }
    a:hover {
      color: ${({ theme }) => theme.colorPrimary7};
      box-shadow: 0px 2px ${({ theme }) => theme.colorPrimary7};
    }
  }
`

const temporalLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

function func1(sideLinks, toggleAnimation) {
  if (sideLinks === "sidebar") {
    if (toggleAnimation) {
      return <SideLinksAnimations>{temporalLinks}</SideLinksAnimations>
    }
  }
  return <NavLinks>{temporalLinks}</NavLinks>
}

export default Links
