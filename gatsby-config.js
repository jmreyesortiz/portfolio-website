/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `portfolio`,
    description: `jmreyesortiz.com portfolio`,
  },

  /* Your site config here */
  plugins: [
    "gatsby-plugin-use-dark-mode",
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Staatliches`,
          `Open Sans`,
          `Montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`, `articles`],
        singleTypes: [`about`],
      },
    },
  ],
}
