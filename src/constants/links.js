import React from "react"
import { Link } from "gatsby"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

const LinkLi = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    margin-left: 2rem;
    a {
      text-transform: capitalize;
      color: "#bb2525";
      font-weight: bold;
      letter-spacing: 0.2rem;
      transition: all 0.3s linear;
      padding: 0.5rem 0;
    }
    a:hover {
    }
  }
`

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

const temporalLinks = data.map(link => {
  return (
    <LinkLi key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </LinkLi>
  )
})

const Links = () => {
  return <>{temporalLinks}</>
}

export default Links
