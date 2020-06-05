import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { Toggle } from "./Toggler"
import { lightTheme, darkTheme } from "./Themes"
import GlobStyles from "../styles/fonts/GlobalStyles.js"

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Navbar />
        {children}
        <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
        <GlobStyles />
      </ThemeProvider>
    </>
  )
}

export default Layout
