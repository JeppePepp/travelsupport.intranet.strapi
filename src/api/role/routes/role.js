module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/role",
      handler: "role.custom",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
