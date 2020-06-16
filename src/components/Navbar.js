import React from "react"
import Logo from "./Logo"
import Navlinks from "../constants/links"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;

  @media screen and (min-width: 992px) {
  }
`
const NavCenter = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`
const NavHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ToggleButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colorPrimary5};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colorPrimary2};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <Nav>
        <NavCenter>
          <NavHeader>
            <Logo />
            <ToggleButton onClick={toggleSidebar}>
              <FaAlignRight />
            </ToggleButton>
          </NavHeader>
          <Navlinks></Navlinks>
        </NavCenter>
      </Nav>
    </>
  )
}

export default Navbar