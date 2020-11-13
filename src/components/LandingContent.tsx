import React from "react"
import styled from "styled-components"

const LandingHolder = styled.div`
  display: flex;
`

const LandingItem = styled.div``

const LandingItemContent = styled.div``

const SmallHeader = styled.h2`
  font-size: 24px;
  letter-spacing: 0px;
  color: #000;
  font-weight: 800;
  margin-bottom: 16px;
`

const SmallContent = styled.p`
  font-size: 24px;
  letter-spacing: 0px;
  color: #000;
  max-width: 540px;
  margin-bottom: 16px;
`

const LandingButton = styled.button`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  background-color: #2662dd;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 2.6px;
  border: none;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`

const LandingContent = () => (
  <LandingHolder>
    <LandingItem>
      <LandingItemContent>
        <SmallHeader>Who are we?</SmallHeader>
        <SmallContent>
          Hackademics aims to make hackathons more accessible to students, grow
          Sheridan’s presence in the tech community, win competitions, and give
          Sheridan students the tools and resources they need to build their
          careers.
        </SmallContent>
        <a href="/about" style={{ textDecoration: "none" }}>
          <LandingButton>Learn More</LandingButton>
        </a>
      </LandingItemContent>
    </LandingItem>
  </LandingHolder>
)

export default LandingContent
