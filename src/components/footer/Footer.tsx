import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FooterLogo from "./FooterLogo"
import Facebook from "../../data/footer socials/facebook.svg"
import Instagram from "../../data/footer socials/instagram.svg"
import Twitter from "../../data/footer socials/twitter.svg"

const FooterHolder = styled.footer`
  display: flex;
  height: 30vh;
  background-color: #212121;
  bottom: 0px; 
  padding: 0px 7.9vh;
  justify-content: space-between;
`

const FooterEnd = styled.div`
  display: flex;
  width: 50%;
  padding: 7.2vh 0px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: space-around; 
  }
`

const Links = styled.div`
  text-align: left;
  text-transform: uppercase;
  padding-right: 30%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 10%;
    padding-right: 0%;
  }
`

const Social = styled.div`
  text-align: left;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const FooterLink = styled(Link)`
  display: block;
  color: ${props => props.theme.palette.common.white};
  text-decoration: none;
  line-height: 35px;
  letter-spacing: 1.8px;
  font-size: 15px;
  font-weight: 500;

  :hover {
    color: #ddd;
  }
`

const SocialHeader = styled.h3`
  display: block;
  color: ${props => props.theme.palette.common.white};
  text-decoration: none;
  line-height: 45px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1.8px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 2vh;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  margin-right: 32px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0px;
    padding: 11.5px
  }
`

const Footer = ({ menuLinks }) => (
  <FooterHolder>
    <FooterLogo />
    <FooterEnd>
      <Links>
        {menuLinks.map(
          (link: { name: string; slug: string; footer: boolean }) =>
            link.footer ? (
              <FooterLink key={link.name} to={link.slug}>
                {link.name}
              </FooterLink>
            ) : null
        )}
      </Links>
      <Social>
        <SocialHeader>Follow Us</SocialHeader>
        <SocialLink target="_blank" href="https://www.facebook.com/groups/705507743114701/">
          <Facebook />
        </SocialLink>
        <SocialLink target="_blank" href="https://www.instagram.com/hackademicsclub/">
          <Instagram />
        </SocialLink>
        <SocialLink target="_blank" href="https://twitter.com/hackademicsclub">
          <Twitter />
        </SocialLink>
      </Social>
    </FooterEnd>
  </FooterHolder>
)

export default Footer
