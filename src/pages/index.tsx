import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../components/footer/Footer"
import { DefaultLayout } from "../components/layouts"
import Navbar from "../components/navbar/Navbar"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <DefaultLayout>
      <SEO title="Home" />
      <Navbar
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </DefaultLayout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
// `
