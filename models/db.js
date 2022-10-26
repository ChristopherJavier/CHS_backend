const mysql = require('mysql')
const config = require('../utils/config')
const logger = require('../utils/logger')

const connection = mysql.createConnection(config.dbConfig)

connection.connect((err) => {
    logger.info('connecting to db')
    if (err) logger.errorHandler(err)
    console.log('Connected!')
})

module.exports = {
    connection
}