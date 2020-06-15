import React from "react"
import styled from "styled-components"

import SocialLinks from "../constants/SocialLinks"

export const Footer = () => {
  return (
    <InnerFooter>
      <SocialLinks />
      <h4>Copyright&copy;{new Date().getFullYear}</h4>
      <Span>Jmreyesortiz All Rights Reserved</Span>
    </InnerFooter>
  )
}

const InnerFooter = styled.footer`
  margin: 0 auto 1rem auto;
  h4 {
    color: ${({ theme }) => theme.colorPrimary9};
  }
`

const Span = styled.span`
  color: ${({ theme }) => theme.colorPrimary9};
`
