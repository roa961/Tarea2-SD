const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app123',
    brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})
const producer = kafka.producer()

exports.Coord = async (req, res) => {
    const producer = kafka.producer();
    await producer.connect();
    const { id,coordenadas , denuncia } = req.body;
    let ubicacion = {
        id: id,
        coordenadas: coordenadas,
        denunciado: denunciado
    }
    value = JSON.stringify(ubicacion)
    if (ubicacion["denunciado"] == 1) {
        console.log("Carrito denunciado")

        const prof = [{
            topic: 'ubicacion',
            partition: 1,
            messages: [{ value: JSON.stringify(ubicacion), partition: 1 }]
        },
        ]
        await producer.sendBatch({ prof })
        console.log("Envie", ubicacion)
    }
    else {
        console.log("Carrito no denunciado")

        const prof = [
            {
                topic: 'ubicacion',
                partition: 0,
                messages: [{ value: JSON.stringify(ubicacion), partition: 0 }]
            },
            {
                topic: "ubicacion",
                messages: [{ value: JSON.stringify(ubicacion) }]
            }
        ]
        await producer.sendBatch({ prof })
        console.log(ubicacion)
    }
    await producer.disconnect();
    res.json("ubicacion");
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
exports.stock = async (req, res) => {
    const { patente,cliente,n_sopaipillas } = req.body;
    const producer = kafka.producer();
    await producer.connect()
    await producer.send({
        topic: 'stock',
        messages: [
            {
                value: JSON.stringify({
                    stock: stock

                })
            },
        ],
    })
    await producer.disconnect()

    return res.status(201).json({
        stock: stock

    })

}

