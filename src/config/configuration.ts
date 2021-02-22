export const Configuration = {
    server: {
        host: 'localhost',
        port: process.env.PORT || 8081
    },
    swagger: {
        key: "swagger",
        title: "Shortener Url Api",
        description: "This API provides a simple tool that takes a long URL and turns it into whatever URL.",
        version: "1.0"
    },
    datasource: {
        type: "postgres",
        host: '127.0.0.1',
        port: 5432,
        username: 'thales',
        password: 'password',
        database: 'DB_URL_SHORTENER',
        synchronize: true
    }
}
