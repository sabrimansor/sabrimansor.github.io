/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
      title: `Personal Website`,
      siteUrl: `https://sabrimansor.github.io/`,
      description: "Hi, I'm Sabri Mansor. I'm a software engineer based in Singapore. My experience covers Web development, AI, Mobile and Cloud applications. Check out my personal website to find out more about the projects I have worked on.",
      author: "Sabri Mansor",
      siteLanguage: "en",
      image: "src/data/images/slider/profile_pic.jpg",
      titleTemplate: "sabrimansor",
      getform_url: "",
      socials: [
          {
              id: 0,
              title: "github",
              path: "https://github.com/sabrimansor",
              icon: "Github",
          },
          {
              id: 1,
              title: "facebook",
              path: "https://www.facebook.com/saabri.mansor/",
              icon: "Facebook",
          },
          {
              id: 2,
              title: "linkedin",
              path: "https://www.linkedin.com/in/sabri-mansor/",
              icon: "Linkedin",
          },
      ],
      contact: {
          phone: "",
          email: "",
      },
  },
  plugins: [
      {
          resolve: "gatsby-plugin-sass",
          options: {
              useResolveUrlLoader: {
                  options: {
                      sourceMap: true, //default is false
                  },
              },
          },
      },
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-transformer-json",
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `images`,
              path: `${__dirname}/src/assets/images`,
              ignore: [`**/\.*`],
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `data`,
              path: `${__dirname}/src/data`,
              ignore: [`**/\.*`],
          },
      },
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 1200,
                      },
                  },
              ],
          },
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: "Sabri Mansor",
              short_name: "sabrimansor",
              theme_color: "#ff014f",
              background_color: "#ffffff",
              display: "standalone",
              scope: "/",
              start_url: "/",
              icon: "src/assets/images/favicon.jpg",
          },
      },
  ],
};
