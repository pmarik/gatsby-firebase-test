require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Test Site | Home Page`,
    description: `Lorem Ipsum test solor consetetur adipsciing elit sed do ut labore`,
    url: "https://www.marik.tech",
    image: "/img/ogDefaultImage.JPG",
    keywords: "test site",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-purgecss`, 
      options: {
        printRejected: true,
        develop: true,
        ignore: ['/landingContent.styles.scss', '/button.styles.scss']
      }
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}