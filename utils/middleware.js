const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:', request.path)
    console.log('Body:', request.body)
    console.log('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err) => {
    console.log('Code:', err.code)
    console.log('Message:', err.message)
    if (err) throw console.log(err)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}