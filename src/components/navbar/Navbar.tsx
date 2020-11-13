import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import NavbarLogo from "./NavbarLogo"

interface IProps {
  open?: boolean,
}

const Navigation = styled.nav`
  position: relative;
  background-color: transparent;
  text-transform: uppercase;
  z-index: 2;
  align-self: center;
  border: none;
  height: 173px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 140px;
  padding-right: 140px;
  padding-top: 60px;

  @media (max-width: 1256px) {
    padding: 25px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 1256px) {
    display: flex;
  }
`

const Navbox = styled.div<IProps>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: left;

  @media (max-width: 1256px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1rem;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 5.5rem;
    left: ${props => (props.open ? "0" : "-100%")};
  }
`

const Hamburger = styled.div<IProps>`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  justify-self: flex-end;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = ({ siteTitle, menuLinks }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <NavbarLogo />
      <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
        <Hamburger open={navbarOpen} />
      </Toggle>
      <Navbox open={navbarOpen}>
        <NavbarLinks menuLinks={menuLinks} />
      </Navbox>
    </Navigation>
  )
}

export default Navbar
