/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    author: "Diego Souza",
    siteUrl: `https://dsouza.com.br`,
    image: "/og-diego-souza.jpg",
    icon: "/favicon.svg",
    title: `Diego Souza | desenvolvedor front-end`,
    description: "Olá, me chamo Diego Souza. Um desenvolvedor front-end carioca e apaixonado por tecnologia.",
    navLinks: ["Sobre", "Projetos"],
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://rest.dsouza.com.br/api_v1__graphql",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/icon.png",
        name: `dsouza.com.br`,
        short_name: `Dsouza`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [`/projetos/`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Fira Sans\:300,400,500,600,800`, `Noto Sans\:300,400,600`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `myimgs`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options:{
        id: "GTM-MHN8H35",
        includeInDevelopment: false,
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        enableWebVitalsTracking: true,
      }
    }
  ],
};
