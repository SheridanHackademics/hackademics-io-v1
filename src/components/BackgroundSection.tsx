import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1100px) {
      height: 75vh;
  }
`

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { eq: "hackville-bg" }, extension: { eq: "png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
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
        <StyledBackground
          Tag="section"
          fluid={imageData}
          backgroundColor={`#fff`}
        >
            {children}
        </StyledBackground>
      )
    }}
  />
)

export default BackgroundSection