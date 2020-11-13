import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";



const NavItem = styled(Link)`
  font-size: 18px;
  font-weight: 800;
  color: ${props => props.theme.palette.common.black};
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-left: 2.5rem;
  text-transform: uppercase;

  :hover {
    color: ${props => props.theme.palette.common.gray};
  }

  @media (max-width: 1100px) {
    color: ${props => props.theme.palette.uncommon.lightBlack};
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = ({ menuLinks }) => {
  return (
    <div>
      {menuLinks.map((link: { name: string; slug: string }) => (
        <NavItem key={link.name} to={link.slug}>{link.name}</NavItem>
      ))}
    </div>
  )
}

export default NavbarLinks
