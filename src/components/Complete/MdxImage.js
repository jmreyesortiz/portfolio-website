import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

export const MdxImage = ({ children }) => {
  return (
    <MdxImg>
      <ReactMarkdown>{children}</ReactMarkdown>
    </MdxImg>
  )
}

const MdxImg = styled.div`
  img {
    width: 40rem;
    border-radius: 10px;
    object-fit: cover;
  }
`
