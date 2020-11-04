import React from "react"
import BackgroundSection from "../BackgroundSection"

import "./layout.css"

const DefaultLayout = ({ children, image }) => {
  return (
    <main>
      <BackgroundSection image={image} >
        {children}
      </BackgroundSection>
    </main>
  )
}

export default DefaultLayout
