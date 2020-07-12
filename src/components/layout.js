import React from "react"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./Themes"
import { GlobalStyles } from "./GlobalStyles.js"
import { Footer } from "./Footer"
import SideBar from "../components/Sidebar"
import useDarkMode from "use-dark-mode"

const Layout = ({ children }) => {
  //Dark Mode
  const darkMode = useDarkMode(false)
  const themeMode = darkMode.value ? darkTheme : lightTheme
  console.log("dmode value is" + darkMode.value)
  let darkModeValue = darkMode.value
  console.log(darkModeValue)
  //SideBar
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />

          <Navbar
            toggleTheme={darkMode.toggle}
            theme={darkModeValue}
            toggleSidebar={toggleSidebar}
          />
          <SideBar
            theme={darkModeValue}
            toggleTheme={darkMode.toggle}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
          />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
