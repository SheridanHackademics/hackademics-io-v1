import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroHolder = styled.div`
  color: #f7f7ff;
  margin-top: 19.7vh;
  margin-bottom: 29vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const HeroSubtitle = styled.span`
  flex-basis: 100%;
  margin-top: 55px;
  font-weight: 700;
  font-size: 45px;
  letter-spacing: 4.5px;
  display: block;
  text-align: center;
  text-transform: uppercase;
`

const HeroButton = styled.button`
  display: block;
  margin-top: 45px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: #ffffff;
  background-color: #2662dd;
  font-size: 33px;
  font-weight: 700;
  letter-spacing: 3.3px;
  border: none;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #ffffff;
    color: #2662dd;
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
            ...GatsbyImageSharpFluid
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
