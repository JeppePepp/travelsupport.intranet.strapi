module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/users/me",
      handler: "user.meWithRole",
    },
    // {
    //   // Path defined with a URL parameter
    //   method: "GET",
    //   path: "/users/me/",
    //   handler: "user.me",
    // },
  ],
};
