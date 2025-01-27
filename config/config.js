require('dotenv').config();

module.exports = {
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            ssl: process.env.DB_SSL ? {
                require: true,
                rejectUnauthorized: false  // Note: Adjust according to your SSL configuration needs
            } : false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
