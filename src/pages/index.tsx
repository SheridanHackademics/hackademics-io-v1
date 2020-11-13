import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import LandingContent from "../components/LandingContent"
import { DefaultLayout, LandingLayout } from "../components/layouts"
import Navbar from "../components/navbar/Navbar"

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
    }
  `)

  return (
    <DefaultLayout image={data.file.childImageSharp.fluid}>
      <SEO title="Home" />
      <Navbar
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Hero/>
      <LandingLayout>
        <LandingContent/>
      </LandingLayout>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </DefaultLayout>
  )
}

export default IndexPage
