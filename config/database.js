const path = require("path");

module.exports = ({ env }) => {
    const configs = {
        LOCAL: {
            connection: {
                client: "sqlite",
                connection: {
                    filename: path.join(
                        __dirname,
                        "..",
                        env("DATABASE_FILENAME", ".tmp/data.db")
                    ),
                },
                useNullAsDefault: true,
            },
        },

        REMOTE: {
            connection: {
                client: "postgres",
                connection: {
                    host: env("DB_HOST"),
                    port: env.int("DB_PORT"),
                    database: env("DB_NAME"),
                    user: env("DB_USER"),
                    password: env("DB_PASS"),
                    ssl: {
                        rejectUnauthorized: false
                    },
                },
                debug: false,
            },
        },
    };

    return configs[env("DATABASE_MODE")];
};
