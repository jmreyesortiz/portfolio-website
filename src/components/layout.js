import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../components/Themes.js"
import { GlobalStyles } from "./GlobalStyles.js"
import { Footer } from "./Footer"
import SideBar from "../components/Sidebar"

const Layout = ({ children }) => {
  //SideBar
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <>
          <GlobalStyles />
          <Navbar toggleSidebar={toggleSidebar} />
          <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
