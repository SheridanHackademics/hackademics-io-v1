import React from "react"
import BackgroundSection from "../BackgroundSection"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../themes/theme"

import "./layout.css"

const ImageLayout = ({ children, image }) => {
  const theme = defaultTheme
  return (
    <main>
      <ThemeProvider theme={theme}>
        <BackgroundSection image={image}>{children}</BackgroundSection>
      </ThemeProvider>
    </main>
  )
}

export default ImageLayout
