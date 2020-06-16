import React from "react"
import styled from "styled-components"
import Links from "../constants/links"
import { FaTimes } from "react-icons/fa"
import SocialLinks from "../constants/SocialLinks"
import { keyframes } from "styled-components"

const SideBar = ({ isOpen, toggleSidebar }) => {
  const sideBarBool = true
  return (
    <SBar sideBarBool={isOpen}>
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      <div>
        <Links sideLinks="sidebar" />
        <SocLinks />
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
const ShowSideBar = styled.aside`
  opacity: 1;
  transform: translateX(0);
`
const CloseButton = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colorRedDark};
  cursor: pointer;
`
const SocLinks = styled(SocialLinks)`
  li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`

const slideRight = keyframes`
 0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`
const slideUp = keyframes`
 0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export default SideBar
