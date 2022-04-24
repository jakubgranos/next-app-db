module.exports = ({ env }) => ({
    host: process.env.HOST
    port: process.env.PORT
    proxy: true,
    app: {
        keys: process.env.APP_KEYS,
    },
});
