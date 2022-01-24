module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/user-extend/:id",
      handler: "user-extend.find",
    },
    // {
    //   // Path defined with a URL parameter
    //   method: "GET",
    //   path: "/users/me/",
    //   handler: "user.me",
    // },
  ],
};
