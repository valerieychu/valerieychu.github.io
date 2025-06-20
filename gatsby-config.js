/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Valerie Chu Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-NVTZCHS43M", // Replace with your Google Analytics tracking ID
        ],
        // gtagConfig: {
        //   optimize_id: "YOUR_OPTIMIZE_ID", // Optional
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
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
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
  ],
};
