module.exports = {
  siteMetadata: {
    title: 'Typically Articulate',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-resolve-src',
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: 'src/utils/typography.js'
        }
      }
    ],
}
