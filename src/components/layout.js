import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/Themes.js"
import { GlobalStyles } from "./GlobalStyles.js"
import { Footer } from "./Footer"
import SideBar from "../components/Sidebar"
import { useDarkMode } from "./useDarkMode"

const Layout = ({ children }) => {
  const [theme, useTheme] = useDarkMode()
  /*
  const themeMode = theme === "light" ? lightTheme : darkTheme
  */

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
          <Navbar
            theme={theme}
            toggleTheme={useTheme}
            toggleSidebar={toggleSidebar}
          />
          <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
