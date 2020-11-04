require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Hackademics`,
    description: `Homepage for the Sheridan Hackademics club`,
    menuLinks: [
      {
        name: "About",
        slug: "/about",
        footer: true,
      },
      {
        name: "Team",
        slug: "/team",
        footer: true,
      },
      {
        name: "Sponsorship",
        slug: "/sponsor",
        footer: true,
      },
      {
        name: "Podcast",
        slug: "/podcast",
        footer: false,
      },
      {
        name: "Hackville",
        slug: "https://hackville.io",
        footer: false,
      },
      {
        name: "Contact",
        slug: "/contact",
        footer: true,
      },
    ]
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lit3mu9wj9wq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: false, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hackademics Website`,
        short_name: `hackademics.io`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,300i,400,400i,600,600i,700,700i,800,800i`,
        ],
      },
    },
  ],
}
