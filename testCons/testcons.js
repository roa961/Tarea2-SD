const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], //cambiar a kafka cuando sea docker
})

const consumer = kafka.consumer({ groupId: 'test-group' })

 consumer.connect()
 consumer.subscribe({ topic: 'registrar', fromBeginning: true })

consumer.run({
  eachMessage:  ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString()
    })
  },
})