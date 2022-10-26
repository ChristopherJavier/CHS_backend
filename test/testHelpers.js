const patients = [
    {
        id: 1,
        nombre: 'Alberto Alexander',
        apellido: 'Almanzar',
        numero: '8099881010',
    },
    {
        id: 2,
        nombre: 'Billy',
        apellido: 'Bonifacio',
        numero: '8090010001',
    },
    {
        id: 3,
        nombre: 'Carlos',
        apellido: 'Carrero',
        numero: '8090020002',
    },
    {
        id: 4,
        nombre: 'Dalia',
        apellido: 'Danes',
        numero: '8090030003',
    },
    {
        id: 5,
        nombre: 'Emilio',
        apellido: 'Esparza',
        numero: '8090040004',
    }
]

const newPatient = {
    id: 10,
    nombre: 'Fabrizzio',
    apellido: 'Ferrari',
    numero: '8090050005',
}

const updatedPatient = {
    id: 10,
    nombre: 'Fabrizzio',
    apellido: 'Ferrari',
    numero: '8090010055',
}

module.exports = {
    patients,
    newPatient,
    updatedPatient
}