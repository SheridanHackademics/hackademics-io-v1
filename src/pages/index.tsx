import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../components/footer/Footer"
import Layout from "../components/layout"
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
    <Layout>
      <SEO title='Home' />
      <Navbar
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Footer/>
    </Layout>
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
