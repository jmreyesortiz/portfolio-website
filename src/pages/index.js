import React from "react"
import Layout from "../components/layout"
import GlobalStyles from "../styles/fonts/GlobalStyles.js"
import Hero from "../components/Hero"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/Themes"
import { Toggle } from "../components/Toggler"
import { useDarkMode } from "../components/useDarkMode"

export default function Home() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Layout>
          <Hero></Hero>
          <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
          <GlobalStyles />
        </Layout>
      </>
    </ThemeProvider>
  )
}
