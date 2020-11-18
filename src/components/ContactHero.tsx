import React from "react"
import styled from "styled-components"

const Holder = styled.div`
  text-align: center;
  padding: 40vh 20vw;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 20vh 2rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme.palette.uncommon.lightBlack};
  margin-bottom: 55px;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`

const Button = styled.button`
  padding: 20px 60px;
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.primary.green};
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 2.6px;
  border: none;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const ContactHero = ({ title }) => (
  <Holder>
    <Title>{title}</Title>
    <a href="/contact" style={{ textDecoration: "none" }}>
      <Button>Contact Us</Button>
    </a>
  </Holder>
)

export default ContactHero
