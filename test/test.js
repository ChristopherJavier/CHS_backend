/* eslint-disable no-undef */
const supertest = require('supertest')
const app = require('../app')
const db = require('../models/db')
const api = supertest(app)
const testHelpers = require('./testHelpers') 

afterAll(() => {
    db.connection.end()
})

describe('Testing the backend', () => {
    test('the patients are returned in json', async () => {
        await api
            .get('/api/patients')
            .expect('Content-Type', /application\/json/)
    })

    test('All the patients in /api/patients', async () => {
        let users = await api
            .get('/api/patients')

        expect(users.body.length).toBe(9)
    })

    test('When search a patient by ID only one is returned', async () => {
        let user = await api
            .get('/api/patients/3')

        expect(user.body.length).toBe(1)
    })

    test('the patients length is extended when added a new one', async () => {
        let users = await api.get('/api/patients')

        const patientsLength = users.body.length

        await api
            .post('/api/patients')
            .send(testHelpers.newPatient)
            .expect(201)
            .expect('Content-Type', /application\/json/)
        
        await api
            .get('/api/patients')
            .expect(res => res.body.length).toHaveLength(patientsLength + 1)
    })
})