// const path = require("path");

module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: env(
          "INSTANCE_CONNECTION_NAME",
          "travelsupport-intranet.mysql.database.azure.com"
        ),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "intranetdb"),
        user: env("DATABASE_USERNAME", "traveladmin@travelsupport-intranet"),
        password: env("DATABASE_PASSWORD", "tr@velsupport1234"),
        ssl: false,
        // ssl: {
        //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        // },
      },

      debug: false,
    },
    // connection: {
    //   client: 'sqlite',
    //   connection: {
    //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    //   },
    //   useNullAsDefault: true,
    // },
  };
};
