import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"

export const Footer = () => {
  return (
    <InnerFooter>
      <FooterLinks />
      <h4>copyright&copy;{new Date().getFullYear}</h4>
      <Span>jmreyesortiz.com</Span> All Rights Reserved
    </InnerFooter>
  )
}

const InnerFooter = styled.footer``
const FooterLinks = styled(SocialLinks)`
  margin: 0 auto 1rem auto;
  color: ${({ theme }) => theme.colorWhite};
`
const Span = styled.span`
  color: ${({ theme }) => theme.colorPrimary5};
`
