module.exports = {
  // GET /hello
  custom: async (ctx, next) => {
    const data = await strapi.db.query("role").find();

    return data;
  },
  //   custom: async (ctx, next) => {
  //     const data = await strapi.db
  //       .query("plugin::users-permissions.role")
  //       .findOne({
  //         //   select: ["title", "description"],
  //         where: { id: 2 },
  //         //   populate: { category: true },
  //       });

  //     return data;
  //   },

  //   fetchAuthenticatedUser(id) {
  //     return strapi.query("user", "users-permissions").findOne({ id }, ["role"]);
  //   },
};
