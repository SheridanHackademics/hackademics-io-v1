import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItemLink = styled(Link) <{ useDark: boolean }>`
  font-size: 18px;
  font-weight: 800;
  color: ${props =>
    props.useDark
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-left: 2.5rem;
  text-transform: uppercase;

  :hover {
    color: ${props =>
    props.useDark
      ? props.theme.palette.common.gray
      : props.theme.palette.uncommon.offWhite};
  }

  @media (max-width: 1100px) {
    color: ${props => props.theme.palette.common.black};
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavItemHref = styled.a<{ useDark: boolean }>`
  font-size: 18px;
  font-weight: 800;
  color: ${props =>
    props.useDark
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-left: 2.5rem;
  text-transform: uppercase;

  :hover {
    color: ${props =>
    props.useDark
      ? props.theme.palette.common.gray
      : props.theme.palette.uncommon.offWhite};
  }

  @media (max-width: 1100px) {
    color: ${props => props.theme.palette.common.black};
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = ({ menuLinks, useDark }) => {
  return (
    <>
      {menuLinks.map((link: { name: string; slug: string }) => (
        (link.slug.startsWith("/")
          ? <NavItemLink key={link.name} useDark={useDark} to={link.slug}>{link.name}</NavItemLink>
          : <NavItemHref key={link.name} useDark={useDark} href={link.slug} rel="nofollow" target="_blank">{link.name}</NavItemHref>
        )
      ))}
    </>
  )
}

export default NavbarLinks
