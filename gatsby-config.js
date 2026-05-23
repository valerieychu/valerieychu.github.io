/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Valerie Chu Portfolio`,
    siteUrl: `https://valerieychu.github.io`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-8NVWK0K97P", 
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/valeriechu.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
//