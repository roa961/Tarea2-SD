const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'], //cambiar a kafka cuando sea docker
})

exports.Coords = async (req, res) => {



}