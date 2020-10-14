import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { eq: "hackville-bg" }, extension: { eq: "png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <StyledBackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#fff`}
        >
            {children}
        </StyledBackgroundImage>
      )
    }}
  />
)

export default BackgroundSection