module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '253b88de7be2cd5d5b638e44a4206a14'),
  },
});
