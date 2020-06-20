import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { Toggle } from "./Toggler"
import { lightTheme, darkTheme } from "./Themes"
import GlobStyles from "../styles/fonts/GlobalStyles.js"
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
        <Toggle theme={theme} toggleTheme={useTheme}></Toggle>
        <Navbar toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <GlobStyles />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
