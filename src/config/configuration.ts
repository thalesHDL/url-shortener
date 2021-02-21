export const Configuration = {
    server: {
        host: 'localhost',
        port: process.env.PORT || 8081
    },
    swagger: {
        key: "swagger",
        title: "Cats example",
        description: "The cats API description",
        version: "1.0"
    },
    datasource: {
        type: "postgres",
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'postgres',
        schema: 'public',
        synchronize: true
    }
}
