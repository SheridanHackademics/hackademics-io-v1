import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BackgroundSection = ({ children, image }) => (
  <StyledBackgroundImage
    Tag="section"
    fluid={image}
    backgroundColor={`#fff`}
  >
    {children}
  </StyledBackgroundImage>
)

export default BackgroundSection
