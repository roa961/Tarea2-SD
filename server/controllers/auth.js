const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'], //cambiar a kafka cuando sea docker
})
const producer = kafka.producer()


exports.AgenteExt = async (req, res) => {
    const { coord } = req.body

}

exports.RegistrarCarrito = async (req, res) => {
    const { nombre, apellido, rut, correo, patente, premium } = req.body
    await producer.connect()
    if (premium) {
        await producer.send({
            topic: 'registrar',
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

            ]
        })

    }
    else {
        await producer.send({
            topic: 'registrar',
            messages: [
                {
                    value: JSON.stringify({
                        nombre: nombre,
                        apellido: apellido,
                        rut: rut,
                        correo: correo,
                        patente: patente,
                        premium: premium
                    })
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
    const { cliente, n_sopaipillas, hora, stock_restante, ubicacion } = req.body

    await producer.connect()
    await producer.send({
        topic: 'venta',
        messages: [
            {
                value: JSON.stringify({
                    cliente: cliente,
                    n_sopaipillas: n_sopaipillas,
                    hora: hora,
                    stock_restante: stock_restante,
                    ubicacion: ubicacion,
                })
            },
        ],
    })

    return res.status(201).json({
        cliente: cliente,
        n_sopaipillas: n_sopaipillas,
        hora: hora,
        stock_restante: stock_restante,
        ubicacion: ubicacion,
    })
}