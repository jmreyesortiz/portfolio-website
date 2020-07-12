import React from "react"
import Logo from "./Logo"
import Links from "../constants/links"
import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"
import DarkModeToggle from "./Toggler"
const Navbar = ({ toggleSidebar, theme, toggleTheme }) => {
  return (
    <>
      <Nav>
        <NavCenter>
          <NavHeader>
            <NavLogo />
            {/* Coming from Layout. When Clicked Toggle Sidebar*/}
            <ToggleButton onClick={toggleSidebar}>
              <FaAlignRight />
            </ToggleButton>
          </NavHeader>
          <Links></Links>
        </NavCenter>
        {/* Props coming from layout, passed to the toggle Button in Navbar*/}
        <DarkModeToggle
          theme={theme}
          toggleTheme={toggleTheme}
          isNav={true}
        ></DarkModeToggle>
      </Nav>
    </>
  )
}

const NavLogo = styled(Logo)`
  margin-bottom: 4rem;
  margin-left: 5rem;
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  /* Navbar Color */
  background: ${({ theme }) => theme.colorNav};
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
    font-size: 4rem;
  }
`

export default Navbar
