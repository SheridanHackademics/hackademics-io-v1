import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../themes/theme"

import "./layout.css"
import SEO from "../seo"

interface IProps {
  title: string,
  children: React.ReactNode,
}

const Layout = ({ title, children }: IProps) => {
  const theme = defaultTheme;
  return (
    <main>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </main>
  )
}

export default Layout
