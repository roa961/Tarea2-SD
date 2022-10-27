
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app123',
  brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})



const coord = async () => {
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'coordenadas', fromBeginning: true })

  await consumer.run({
    eachMessage: ({ topic, partition, message }) => {
        console.log("Carrito: " + JSON.parse(message.value.toString()).carrito + "   Coordenadas: " + JSON.parse(message.value.toString()).coordenadas)

    },
    
  })

}

module.exports = { coord }