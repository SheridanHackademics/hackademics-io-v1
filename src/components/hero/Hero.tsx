import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroHolder = styled.div`
  color: #f7f7ff;
  margin-top: 15vh;
  margin-bottom: 29vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 0vh;
    padding: 10vh 0vh;
    height: 100%;
    box-sizing: border-box;
  }
`

const HeroSubtitle = styled.span`
  flex-basis: 100%;
  margin-top: 55px;
  font-weight: 700;
  font-size: 2.813em;
  letter-spacing: 4.5px;
  display: block;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2em;
  }
`

const HeroButton = styled.button`
  display: block;
  margin-top: 45px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: ${props => props.theme.palette.common.white};
  background-color: #2662dd;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 3.3px;
  border: none;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: ${props => props.theme.palette.common.white};
    color: #2662dd;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 5vw;
  }
`

const HackvilleWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  min-width: 45.36vw;
  margin-top: -4px;

  @media (max-width: 1256px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  @media (max-width: 1256px) {
    margin-top: 5.5px;
    min-width: 70vw;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hackville" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeroHolder>
      <HackvilleWrap as={Link} to="/">
        <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
      </HackvilleWrap>
      <HeroSubtitle>Hackville Registrations are open!</HeroSubtitle>
      <a target="_blank" href="https://hackville.io/" style={{ textDecoration: "none" }}>
        <HeroButton>Register Now</HeroButton>
      </a>
    </HeroHolder>
  )
}

export default Hero
