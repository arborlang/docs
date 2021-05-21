module.exports = {
  siteMetadata: {
    title: `ArborLang`,
    name: `ArborLang`,
    siteUrl: `https://arborlang.dev`,
    description: `ArborLang is a modern language to build incredible and portable applications.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/arborlang`
      },

    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
