"use strict";

module.exports = {
  async test(ctx, next) {
    return await strapi.query("api::contact-page.contact-page").findMany({
      populate: {
        contactinfo: true,

        repeatableComponent: {
          populate: {
            componentContactinfo: true,
          },
        },
      },
    });
  },
};
