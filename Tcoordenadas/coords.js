const { Kafka } = require('kafkajs')

const Coord = async () => {
  const kafka = new Kafka({
      clientId: 'my-app123',
      brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
  })
  const consumer = kafka.consumer({ groupId: 'test-gro2d221' })

    await consumer.connect()
    await consumer.subscribe({ topic: "coordenadas", fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log("Carrito: " + JSON.parse(message.value.toString()).carrito + "   Coordenadas: " + JSON.parse(message.value.toString()).coordenadas)
          
        },
    
    })

  }

module.exports = { Coord }