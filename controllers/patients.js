const patientsRouter = require('express').Router()
const dbConnection = require('../models/db')
const middleware = require('../utils/middleware')



patientsRouter.get('/', (request, response) => {
    dbConnection.connection.query('SELECT * FROM paciente', (err, result) => {
        if (err) middleware.errorHandler(err)
        response.json(result)
    })
})

patientsRouter.get('/:id', (request, response) => {
    const id = request.params.id
    
    dbConnection.connection.query(`SELECT * FROM paciente WHERE id=${id} `, (err, result) => {
        try {
            if (result.length > 0) {
                response.json(result)
            } else {
                response.status(404).end()
            }
        } catch (err) {
            middleware.errorHandler(err)
        }
    })
})

module.exports = patientsRouter