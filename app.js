const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const patientsRouter = require('./controllers/patients')
const middleware = require('./utils/middleware')

app.use(cors(config.corsOptions))
app.use(middleware.requestLogger)

app.use('/api/patients', patientsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app