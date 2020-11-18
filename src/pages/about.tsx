import { graphql } from "gatsby"
import React from "react"
import Footer from "../components/footer/Footer"
import { DefaultLayout } from "../components/layouts"
import Navbar from "../components/navbar/Navbar"
import Img from "gatsby-image"
import Hero from "../components/hero"
import Container from "../components/container"
import styled from "styled-components"
import { Edges, IChildImageSharp, Node } from "../types"
import SEO from "../components/seo"

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        menuLinks: {
          name: string
          slug: string
          footer: boolean
        }[]
      }
    }
    header: IChildImageSharp
    allContentfulAboutPageItem: Edges<Node<IAboutSection>>
  }
}

interface IAboutSection {
  id?: string
  title: string
  index: number
  titleColor: {
    hexColor: string
  }
  description: {
    description: string
  }
  image?: {
    fluid: any
  }
}

const Section = styled.section<{ direction: boolean }>`
  margin: 8rem 0rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: ${props => (props.direction ? "left" : "right")};
  flex-direction: ${props => (props.direction ? "row" : "row-reverse")};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 1rem 1rem 4rem 1rem;
    text-align: left;
    flex-direction: "row";
  }
`

const SectionHeader = styled.h1<{ color: string }>`
  font-family: ${props => props.theme.text.font};
  color: ${props => props.color};
  letter-spacing: 5.5px;
  text-transform: uppercase;
  font-size: 55px;
  margin-bottom: 2rem;
  height: 75px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 33px;
    height: 50px;
  }
`

const ItemText = styled.div`
  width: 100%;
`;

const SectionParagraph = styled.p<{ direction?: boolean }>`
  font-family: ${props => props.theme.text.font};
  font-size: 1.2em;
`

const SectionContent = styled.div<{ direction?: boolean }>`
  flex: 1; /* additionally, equal width */
  margin: ${props =>
    props.direction === null
      ? "0rem"
      : props.direction
        ? "0rem 5rem 0rem 0rem"
        : "0rem 0rem 0rem 5rem"};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0rem;
  }
`

const SquareImageHolder = styled.div`
  width: 540px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

const AboutSection = ({
  title,
  titleColor,
  description,
  image,
  index,
}: IAboutSection) => {

  let isEven = index % 2 == 0
  if (index === 0) {
    isEven = null
  }

  return (
    <Section direction={index % 2 == 0}>
      <ItemText>
        <SectionContent direction={isEven}>
          <SectionHeader color={titleColor.hexColor}>{title}</SectionHeader>
          <SectionParagraph direction={isEven}>{description.description}</SectionParagraph>
        </SectionContent>
      </ItemText>
      {image != null ? (
        <SquareImageHolder>
          <Img fluid={image.fluid} alt={title} />
        </SquareImageHolder>
      ) : null}
    </Section>
  )
}

const AboutPage = ({ data }: IProps) => {
  return (
    <DefaultLayout>
      <SEO title="About" />
      <Navbar useDark={true} menuLinks={data.site.siteMetadata.menuLinks} />
      <Img fluid={data.header.childImageSharp.fluid} alt="header" />
      <Container>
        <Hero
          title="About us"
          description="Learn more about Hackademics and our events."
        />
        {data.allContentfulAboutPageItem.edges.map((item, i) => (
          <AboutSection
            title={item.node.title}
            titleColor={item.node.titleColor}
            description={item.node.description}
            index={i}
            image={item.node.image}
          />
        ))}
      </Container>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </DefaultLayout>
  )
}

export const query = graphql`
  query AboutPage {
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
    header: file(name: { eq: "Blue-Header" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulAboutPageItem(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          description {
            description
          }
          id
          titleColor {
            hexColor
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          title
          order
        }
      }
    }
  }
`

export default AboutPage
