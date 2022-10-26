const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})
const producer = kafka.producer()

exports.Coord = async (req, res) => {
    const { coord, patente } = req.body
    await producer.connect()
    await producer.send({
        topic: 'coordenadas',
        messages: [
            {
                value: JSON.stringify({
                    coordenadas: coord,
                    carrito: patente
                }),
                partition: 1
            },
        ],
    })
    return res.status(201).json({
        coordenadas: coord,
        carrito: patente
    })
}

exports.RegistrarCarrito = async (req, res) => {
    const { nombre, apellido, rut, correo, patente, premium } = req.body
    await producer.connect()
    if (premium) {
        await producer.send({
            topic: 'registromiembros',
            messages: [
                {
                    value: JSON.stringify({
                        nombre: nombre,
                        apellido: apellido,
                        rut: rut,
                        correo: correo,
                        patente: patente,
                        premium: premium
                    }),
                    partition: 1
                },

            ]
        })

    }
    else {
        await producer.send({
            topic: 'registromiembros',
            messages: [
                {
                    value: JSON.stringify({
                        nombre: nombre,
                        apellido: apellido,
                        rut: rut,
                        correo: correo,
                        patente: patente,
                        premium: premium
                    }),
                    partition: 0
                },
            ],
        })
    }

    return res.status(201).json({
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        correo: correo,
        n_patente: patente,
        es_premium: premium
    })

}
exports.RegistroVenta = async (req, res) => {
    const { patente, cliente, n_sopaipillas, hora, stock_restante, ubicacion } = req.body

    await producer.connect()
    await producer.send({
        topic: 'ventas',
        messages: [
            {
                value: JSON.stringify({
                    patente: patente,
                    cliente: cliente,
                    n_sopaipillas: n_sopaipillas,
                    hora: hora,
                    stock_restante: stock_restante,
                    ubicacion: ubicacion,
                })
            },
        ],
    })
    await producer.disconnect()

    return res.status(201).json({
        patente: patente,
        cliente: cliente,
        n_sopaipillas: n_sopaipillas,
        hora: hora,
        stock_restante: stock_restante,
        ubicacion: ubicacion,
    })
}
exports.profugo = async (req, res) => {
    const { coord } = req.body
    await producer.connect()
    await producer.send({
        topic: 'coordenadas',
        messages: [
            {
                value: JSON.stringify({
                    coord: coord,
                }),
                partition: 1
            },

        ]
    })

}