import React from "react"
import styled from "styled-components"

const Holder = styled.div`
  text-align: center;
  padding: 40vh 20vw;

  @media (max-width: 788px) {
    padding: 0 20vw 40vh;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #181818;
  margin-bottom: 55px;

  @media (max-width: 788px) {
    font-size: 2.5rem;
  }
`

const Button = styled.button`
  padding: 20px 60px;
  color: #ffffff;
  background-color: #0ba083;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 2.8px;
  border: none;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 788px) {
    font-size: 1rem;
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
