import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import { ImageLayout, LandingLayout } from "../components/layouts"
import Navbar from "../components/navbar/Navbar"
import LandingItem from "../components/LandingItem"
import ContactHero from "../components/ContactHero"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            slug
          }
        }
      }
      file(name: { eq: "hackville-bg" }, extension: { eq: "png" }) {
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
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ImageLayout image={data.file.childImageSharp.fluid}>
        <SEO title="Home" />
        <Navbar
          useDark={false}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <Hero />
      </ImageLayout>
      <LandingLayout>
        {data.allContentfulLandingPageItem.edges.map((item, i) => (
          <LandingItem
            index={i}
            title={item.node.title}
            description={item.node.description.description}
            button={item.node.buttonText}
            href={item.node.buttonUrl}
            color={item.node.buttonColor.hexColor}
            illustration={item.node.illustration}
          />
        ))}
        <ContactHero title="Have more questions? Reach out to us!"/>
      </LandingLayout>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </>
  )
}

export default IndexPage
