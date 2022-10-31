const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app123',
  brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})
const coord = async () => {
  const consumer = kafka.consumer({ groupId: "ubication" });
  console.log("Entra Ubication")
  await consumer.connect();
  await consumer.subscribe({ topic: "ubication", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if(partition == 0){
        console.log("carrito no denunciado")
        console.log(value) 
      }
      else if(partition == 1)
      {
        console.log("carrito denunciado")
        console.log(value)
      }
      else
      {
        console.log("error")
      }
    },
  })
}
module.exports = { coord }