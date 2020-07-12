import React from "react"
import styled from "styled-components"
import Links from "../constants/links"
import { FaTimes } from "react-icons/fa"
import SocialLinks from "../constants/sociallinks"
import Toggle from "./Toggler"

const SideBar = ({ isOpen, toggleSidebar, toggleTheme, theme }) => {
  // Variables for both links to be used as inputs for the function
  const NormLinks = <Links toggleAnimation={true} sideLinks="sidebar" />
  const SocLinks = <SLinks isSideBar={true} toggleAnimation />
  return (
    <SBar sideBarBool={isOpen}>
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      {/* Display the Menu Links, and the Social media Links with the Function */}
      <div>
        {showLinks(isOpen, NormLinks)}
        {/* Dark Mode Toggle Button with prop buttons comign from layout */}
        <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
        {showLinks(isOpen, SocLinks)}
      </div>
    </SBar>
  )
}

const DarkModeToggle = styled(Toggle)`
  font-size: 2rem;
`

const SBar = styled.aside`
  background: ${({ theme }) => theme.body};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 1;
  opacity: ${props => (props.sideBarBool ? 1 : 0)};
  transform: ${props =>
    props.sideBarBool ? props.theme.showSideBar : props.theme.hideSideBar};
  transition: ${({ theme }) => theme.transition};
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`
const CloseButton = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colorRedDark};
  cursor: pointer;
`

const SLinks = styled(SocialLinks)``

// Function to return the links.
function showLinks(isOpen, links) {
  if (isOpen) {
    return links
  } else {
    return null
  }
}

export default SideBar
