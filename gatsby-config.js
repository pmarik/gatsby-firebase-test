require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Marik Tech | Web Development`,
    description: `Boost your business with enhanced web development and design solutions from Marik Tech.`,
    url: "https://www.marik.tech",
    image: "/img/ogDefaultImage.JPG",
    keywords: "web development, web design, website developer near me, website developer, website developer for hire, website developer Salt Lake City UT, website developer for small business, online marketing, website help, freelance web developer, website consultation",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`400`],
          },
          {
            family: `Roboto`,
            variants: [`700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`, 
      options: {
        printRejected: true,
        develop: true,
        ignore: ['/landingContent.styles.scss', '/button.styles.scss']
      }
    }, // must be after other CSS plugins
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}