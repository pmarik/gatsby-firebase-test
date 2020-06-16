// const { createFilePath } = require(`gatsby-source-filesystem`)
//const path = require(`path`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions 
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages`})
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*"

    // Update the page.
    createPage(page)
  }
}


// exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
//   // prevent gatsby build failing on eslint errors
//   const defaultConfig = getConfig();
//   defaultConfig.module.rules = defaultConfig.module.rules.filter(
//     rule => rule.loader !== 'eslint-loader'
//   );
//   actions.replaceWebpackConfig(defaultConfig);
// }