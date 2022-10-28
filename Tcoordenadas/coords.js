
const { Kafka } = require('kafkajs')





const coord = async () => {
    const kafka = new Kafka({
      clientId: 'my-app123',
      brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
    })
    const consumer = kafka.consumer({ groupId: 'test-group221' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'coordenadas', fromBeginning: true })

    await consumer.run({
        eachMessage: ({ topic, partition, message }) => {
            console.log("Carrito: " + JSON.parse(message.value.toString()).carrito + "   Coordenadas: " + JSON.parse(message.value.toString()).coordenadas)

        },
      
    })
    const EARLIEST_OFFSET = -2

    const partitions = [0, 1, 2]

    partitions.forEach((partition) => {
        consumer.seek({ topic: 'coordenadas', offset: EARLIEST_OFFSET, partition })
    })
}

module.exports = { coord }