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
                    host: env("DB_HOST", "127.0.0.1"),
                    port: env.int("DB_PORT", 5432),
                    database: env("DB_NAME"),
                    user: env("DB_USER"),
                    password: env("DB_PASS"),
                    schema: env("DB_SCHEMA"),
                    ssl: {
                        ca: env('DB_CA')
                    }
                },
            },
        },
    };

    return configs[env("DATABASE_MODE")];
};
