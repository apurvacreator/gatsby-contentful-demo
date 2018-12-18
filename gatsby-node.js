// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
          `
            {
              allContentfulProduct {
                edges {
                  node {
                    slug
                  }
                }
              }
          }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
  
          // Create pages for each markdown file.
          result.data.allContentfulProduct.edges.forEach(({ node }) => {
            const path = node.slug;
            
            createPage({
              path,
              component: blogPostTemplate,
              context: {
                slug: node.slug
              }
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
            })
          })
        })
      )
    })
  }