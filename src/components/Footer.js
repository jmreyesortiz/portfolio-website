import React from "react"
import styled from "styled-components"

import Links from "../constants/SocialLinks"

export const Footer = () => {
  return (
    <InnerFooter>
      <SocialLinks color="white" />
      <H4>JmReyesOrtiz &copy; {year}</H4>
    </InnerFooter>
  )
}

const year = new Date().getFullYear()

const H4 = styled.h4`
  margin: 0 auto;
  font-family: ${({ theme }) => theme.secondaryFont};
  color: ${({ theme }) => theme.colorPrimary4};
  margin-bottom: 2rem;
`
const SocialLinks = styled(Links)``
const InnerFooter = styled.footer``
