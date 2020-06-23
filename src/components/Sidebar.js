import React from "react"
import styled from "styled-components"
import Links from "../constants/links"
import { FaTimes } from "react-icons/fa"
import SocialLinks from "../constants/SocialLinks"
import DarkModeToggle from "../components/Toggler2"

const SideBar = ({ isOpen, toggleSidebar }) => {
  const Links1 = <Links toggleAnimation={true} sideLinks="sidebar" />
  const Links2 = <SLinks toggleAnimation />
  return (
    <SBar sideBarBool={isOpen}>
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      <div>
        {showLinks(isOpen, Links1)}
        <DarkModeToggle isNav={false} />
        {showLinks(isOpen, Links2)}
      </div>
    </SBar>
  )
}

const SBar = styled.aside`
  background: ${({ theme }) => theme.colorGrey10};
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

function showLinks(isOpen, links) {
  if (isOpen) {
    return links
  } else {
    return null
  }
}

export default SideBar
