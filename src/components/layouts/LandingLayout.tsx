import React from "react"
import BackgroundSection from "../BackgroundSection"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../themes/theme"

import "./layout.css"

const LandingLayout = ({ children }) => {
  const theme = defaultTheme
  return (
    <div className="landingLayout">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default LandingLayout
