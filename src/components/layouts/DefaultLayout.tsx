import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../themes/theme"

import "./layout.css"

const DefaultLayout = ({ children }) => {
  const theme = defaultTheme
  return (
    <main>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </main>
  )
}

export default DefaultLayout
