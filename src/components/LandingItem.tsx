import React from "react"
import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"

const LandingItemContent = styled.div<{ direction: boolean }>`
  display: flex;
  justify-content: space-between;
  text-align: ${props => (props.direction ? "left" : "right")};
  flex-direction: ${props => (props.direction ? "row" : "row-reverse")};
  padding-left: ${props => (props.direction ? "15.73vw" : "0")};
  padding-right: ${props => (props.direction ? "0" : "15.73vw")};

  @media (max-width: 788px) {
    flex-flow: row wrap;
    padding-left: ${props => (props.direction ? "5vw" : "0")};
    padding-right: ${props => (props.direction ? "0" : "5vw")};
  }
`

const ItemText = styled.div`
  padding-top: 15%;
`

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

const ImgWrap = styled.div`
  width: 730px;
  height: 1080px;
`

interface LandingItemProps {
  index: number
  title: string
  description: string
  href: string
  button: string
  color: string
  illustration: {
    fluid
  }
}

const LandingItem = (details: LandingItemProps) => (
  <LandingItemContent direction={details.index % 2 == 0}>
    <ItemText>
      <SmallHeader>{details.title}</SmallHeader>
      <SmallContent>{details.description}</SmallContent>
      <a href={details.href} style={{ textDecoration: "none" }}>
        <LandingButton style={{ backgroundColor: details.color }}>
          {details.button}
        </LandingButton>
      </a>
    </ItemText>
    <ImgWrap>
      <Img fluid={details.illustration.fluid}></Img>
    </ImgWrap>
  </LandingItemContent>
)

export default LandingItem
