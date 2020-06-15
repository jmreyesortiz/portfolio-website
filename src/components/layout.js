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
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Navbar />
        <SideBar />
        {children}
        <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
        <GlobStyles />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
