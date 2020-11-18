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

  @media (max-width: 788px) {
    width: 100%;
  }
`

const Links = styled.div`
  text-align: left;
  text-transform: uppercase;
  padding-right: 30%;

  @media (max-width: 788px) {
    display: none;
  }
`

const Social = styled.div`
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 788px) {
    width: 100%;
  }
`

const FooterLink = styled(Link)`
  display: block;
  color: #ffffff;
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
  color: #ffffff;
  text-decoration: none;
  line-height: 45px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1.8px;
`

const SocialLink = styled.a`
  text-decoration: none;
  margin-right: 32px;
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
