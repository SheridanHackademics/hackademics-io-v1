module.exports = {
  siteMetadata: {
    title: `Hackademics website`,
    description: `Homepage for the Sheridan Hackademics club`,
    author: `@TimmyRB`,
    menuLinks: [
      {
        name: "About",
        slug: "/about",
      },
      {
        name: "Team",
        slug: "/team",
      },
      {
        name: "Sponsorship",
        slug: "/sponsor",
      },
      {
        name: "Podcast",
        slug: "/podcast",
      },
      {
        name: "Hackville",
        slug: "https://hackville.io",
      },
      {
        name: "Contact",
        slug: "/contact",
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,300i,400,400i,600,600i,700,700i,800,800i`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
