require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Marik Tech | Web Development`,
    description: `Boost your business with enhanced web development and design solutions from Marik Tech.`,
    url: "https://www.marik.tech",
    image: "/images/ogDefaultImage.JPG",
    keywords: "web development, web design, website developer near me, website developer, website developer for hire, website developer Salt Lake City UT, website developer for small business, online marketing, website help, freelance web developer, website consultation",
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        ignore: ['/landingContent.styles.scss', '/button.styles.scss']
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify-headers`, // make sure to put last in the array
  ],
}