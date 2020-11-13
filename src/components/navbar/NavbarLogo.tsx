import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  min-width: 205px;
  margin-top: -4px;

  @media (max-width: 1256px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  @media (max-width: 1256px) {
    margin-top: 5.5px;
  }
`
const NavbarLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hackademics-logo-tmpB" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default NavbarLogo