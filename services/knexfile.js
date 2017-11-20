module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            "host": process.env.POSTGRES_HOST || "localhost",
            "port": "5432",
            "database": "shopishop",
            "user": process.env.POSTGRES_USER || "shopishop",
            "password": process.env.POSTGRES_PASSWORD || "shopishop!",
            "max": 10
        }
    }
}