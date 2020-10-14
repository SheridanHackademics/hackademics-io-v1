import React from "react"
import BackgroundSection from "./BackgroundSection"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <BackgroundSection >
        {children}
      </BackgroundSection>
    </main>
  )
}

export default Layout
