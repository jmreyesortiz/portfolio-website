import React from "react"
import styled from "styled-components"

import Links from "../constants/SocialLinks"

export const Footer = () => {
  return (
    <InnerFooter>
      <SocialLinks />
      <h4>Copyright&copy;{new Date().getFullYear}</h4>
      <Span>Jmreyesortiz All Rights Reserved</Span>
    </InnerFooter>
  )
}

const SocialLinks = styled(Links)``
const InnerFooter = styled.footer`
  margin: 0 auto;
  h4 {
    font-family: Montserrat;
    color: ${({ theme }) => theme.colorPrimary9};
  }
`

const Span = styled.span`
  font-family: Montserrat;
  color: ${({ theme }) => theme.colorPrimary9};
`
