module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/contact-page/test",
      handler: "extended.test",
      config: {
        auth: false,
      },
    },
    // {
    //   // Path defined with a URL parameter
    //   method: "GET",
    //   path: "/users/me/",
    //   handler: "user.me",
    // },
  ],
};
