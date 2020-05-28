import React, { useState } from "react"
import Layout from "../components/layout"
import GlobalStyles from "../styles/fonts/styles.js"
import Hero from "../components/Hero"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/Themes"

export default function Home() {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Layout></Layout>

        <Hero></Hero>
        <button onClick={themeToggler}>Switch Theme</button>
        <GlobalStyles />
      </>
    </ThemeProvider>
  )
}
