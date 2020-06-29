import React from "react"
import styled from "styled-components"

import Links from "../constants/SocialLinks"

export const Footer = () => {
  return (
    <InnerFooter>
      <SocialLinks />
      <H4>Copyright &copy; {year}</H4>
      <Span>Jmreyesortiz All Rights Reserved</Span>
    </InnerFooter>
  )
}

const year = new Date().getFullYear()

const H4 = styled.h4`
  margin: 0 auto;
  font-family: Montserrat;
  color: ${({ theme }) => theme.colorPrimary9};
`
const SocialLinks = styled(Links)``
const InnerFooter = styled.footer``

const Span = styled.span`
  font-family: Montserrat;
  color: ${({ theme }) => theme.colorPrimary9};
`
