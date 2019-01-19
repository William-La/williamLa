const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'williamkla.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const allowCrawling = {
  policy: [{ userAgent: '*' }],
  sitemap: null
};

const disallowCrawling = {
  policy: [{ userAgent: '*', disallow: ['/'] }],
  sitemap: null,
  host: null
};

module.exports = {
  pathPrefix: "/williamLa",
  siteMetadata: {
    siteUrl,
    title: "William La"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-72429502-3",
        head: false,
        anonymize: false,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "La William",
        short_name: "wla",
        start_url: "/",
        background_color: "#00205b",
        theme_color: "#0a205b",
        display: "minimal-ui",
        icon: "src/assets/img/profile/pngProfile.png"
      }
    },
    "gatsby-plugin-offline",
  ]
};
