const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app123',
    brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})

exports.coord = async (req, res) => {



}