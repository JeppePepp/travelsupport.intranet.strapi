"use strict";

module.exports = {
  async meWithRole(ctx, next) {
    const { id } = ctx.state.user;

    return await strapi.query("plugin::users-permissions.user").findOne({
      where: { id },
      populate: ["role"],
    });
  },
};
