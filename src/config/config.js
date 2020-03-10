module.exports = {
    development: {
        Database: {
            host: 'localhost',
            port: 3306,
            name: 'mydb',
            dialect: 'mongodb',
            user: 'root',
            password: ''
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}