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
  console.log("EL SIEGUIENTE ES EL MESSAGE")
  await consumer.run({

    eachMessage: async ({ topic, partition, message }) => {
      console.log("CONDICIONES SIGUIENTES")
      if(partition == 0){
        console.log("Este carrito no fue denunciado")
        console.log(value) 
      }
      else if(partition == 1)
      {
        console.log("Este carrito fue denunciado, ES PROFUGO ATRAPENLOC CTMRE")
        console.log(value)
      }
      else
      {
        console.log("Estoy en la shit.")
      }
    },
  })
  console.log("Sali del Mesagge")
}

module.exports = { coord }