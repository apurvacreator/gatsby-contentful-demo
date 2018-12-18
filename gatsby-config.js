module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `c6ljshkb28g8`,
              accessToken: `702c3c8d4bbbf3d049e0e92ae181b19de4f90f5e43b7b41bc987c13cd7c34867`,
            },
          }
    ] 
}