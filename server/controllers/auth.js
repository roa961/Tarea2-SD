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
      let ubication = {
        id: id,
        coordenadas: coordenadas,
        denuncia: denuncia
    }
    value = JSON.stringify(ubication)
    if (ubication["denuncia"] == 1) {
        console.log("Este carrito ha sido denunciado, es profugo")

        const CarroProfugo = [{
            topic: 'ubication',
            partition: 1,
            messages: [{ value: JSON.stringify(ubication), partition: 1 }]
        },
        ]
        await producer.sendBatch({ CarroProfugo })
        console.log("Envie", ubication)
    }
    else {
        console.log("Carrito Limpio.")

        const CarroProfugo = [
            {
                topic: 'ubication',
                partition: 0,
                messages: [{ value: JSON.stringify(ubication), partition: 0 }]
            },
            {
                topic: "ubication",
                messages: [{ value: JSON.stringify(ubication) }]
            }
        ]
        await producer.sendBatch({ CarroProfugo })
        console.log("Envie", ubication)
    }
    await producer.disconnect();
    res.json("ubication");
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

