module.exports = [
  "strapi::errors",
  // "strapi::compression",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::compression",
    config: {
      gzip: {
        enabled: true,
        options: {
          br: false,
        },
      },
    },
  },
];
// module.exports = {
//   settings: {
//     gzip: { enabled: true, options: { br: false } },
//   },
// };
