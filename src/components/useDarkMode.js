import { useEffect, useState } from "react"
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")

  const setMode = themeMode => {
    window.localStorage.setItem("theme", themeMode)
    setTheme(themeMode)
  }

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, themeToggler]
}
