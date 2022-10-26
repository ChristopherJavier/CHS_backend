/* eslint-disable no-undef */
require('dotenv').config()

const PORT = process.env.PORT || 3001

const corsOptions = {
    origin: `http://localhost:${PORT}`
}

module.exports = {
    PORT,
    dbConfig: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    corsOptions
}