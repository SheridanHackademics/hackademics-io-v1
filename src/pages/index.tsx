import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Footer from "../components/footer/Footer"
import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/Navbar"

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
    <BackgroundSection >
      <Layout title='Home'>
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <Footer />
      </Layout>
    </BackgroundSection>
  )
}

export default IndexPage;

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
