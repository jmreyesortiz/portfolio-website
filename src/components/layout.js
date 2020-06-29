import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { lightTheme, darkTheme } from "./Themes"
import { GlobalStyles } from "./GlobalStyles.js"
import { Footer } from "./Footer"
import SideBar from "../components/Sidebar"

const Layout = ({ children }) => {
  const [theme, useTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Navbar
          toggleSidebar={toggleSidebar}
          theme={theme}
          toggleTheme={useTheme}
        />
        <SideBar
          theme={theme}
          toggleTheme={useTheme}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        {children}
        <GlobalStyles />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
