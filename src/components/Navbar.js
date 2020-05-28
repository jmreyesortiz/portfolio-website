import React from "react"
import Logo from "./Logo"
import Links from "../constants/links"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  top: 0;
  left: 0;
  background-color: ${props =>
    props.theme.isDark ? props.theme.darkColor : props.theme.lightColor};
`
const NavCenter = styled.div``
const NavHeader = styled.div``
const ToggleButton = styled.button``

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavCenter>
          <NavHeader>
            <Logo></Logo>
            <ToggleButton>
              <FaAlignRight />
            </ToggleButton>
          </NavHeader>
          <Links></Links>
        </NavCenter>
      </Nav>
    </>
  )
}
export default Navbar
