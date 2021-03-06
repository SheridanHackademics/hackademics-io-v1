import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Img from "gatsby-image"
import { ImageLayout, LandingLayout } from "../components/layouts"
import Navbar from "../components/navbar/Navbar"
import ContactHero from "../components/ContactHero"
import styled from "styled-components"
import { Edges, IChildImageSharp, IMenuLink, Node } from "../types"

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        menuLinks: IMenuLink[]
      }
    }
    bg: IChildImageSharp
    allContentfulLandingPageItem: Edges<Node<ILandingPage>>
  }
}

interface ILandingPage {
  id: string
  title: string
  description: {
    description: string
  }
  buttonText: string
  buttonColor: {
    hexColor: string
  }
  buttonUrl: string
  illustration: {
    fluid: any
  }
}

const LandingItemContent = styled.div<{ direction: boolean }>`
  display: flex;
  justify-content: space-between;
  text-align: ${props => (props.direction ? "left" : "right")};
  flex-direction: ${props => (props.direction ? "row" : "row-reverse")};
  padding-left: ${props => (props.direction ? "15.73vw" : "0")};
  padding-right: ${props => (props.direction ? "0" : "15.73vw")};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-flow: row wrap;
    padding: 5vw;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 700px;
  }
`

const ItemText = styled.div`
  padding-top: 15%;
`

const SmallHeader = styled.h2`
  font-size: 24px;
  letter-spacing: 0px;
  color: ${props => props.theme.palette.common.black};
  font-weight: 800;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    text-align: center;
  }
`

const SmallContent = styled.p`
  font-size: 24px;
  letter-spacing: 0px;
  color: ${props => props.theme.palette.common.black};
  max-width: 540px;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    text-align: left;
  }
`

const LandingButton = styled.button`
  padding: 20px 60px;
  color: ${props => props.theme.palette.common.white};;
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

const ImgWrap = styled.div`
  width: 730px;
  height: 1080px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`

interface LandingItemProps {
  index: number
  title: string
  description: string
  href: string
  button: string
  color: string
  illustration: {
    fluid: any
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

const IndexPage = ({ data }: IProps) => {
  return (
    <>
      <ImageLayout image={data.bg.childImageSharp.fluid}>
        <SEO title="Home" />
        <Navbar useDark={true} menuLinks={data.site.siteMetadata.menuLinks} />
        <Hero />
      </ImageLayout>
      <LandingLayout>
        {data.allContentfulLandingPageItem.edges.map((item, i) => (
          <LandingItem
            key={item.node.title}
            index={i}
            title={item.node.title}
            description={item.node.description.description}
            button={item.node.buttonText}
            href={item.node.buttonUrl}
            color={item.node.buttonColor.hexColor}
            illustration={item.node.illustration}
          />
        ))}
        <ContactHero title="Have more questions? Reach out to us!" />
        <Footer menuLinks={data.site.siteMetadata.menuLinks} />
      </LandingLayout>
    </>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          slug
          footer
        }
      }
    }
    bg: file(name: { eq: "hackville-bg" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allContentfulLandingPageItem(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          buttonText
          buttonColor {
            hexColor
          }
          buttonUrl
          illustration {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
