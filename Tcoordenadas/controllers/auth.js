const { Kafka } = require('kafkajs')
const { coord } = require('../coords')

const kafka = new Kafka({
    clientId: 'my-app123',
    brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})
exports.coordenadas = async (req, res) => {
    await coord()
    try {
        return res.status(200).json({
            Resumen_Diario: true
        })
     
    }
    catch (error) {
        console.log(error.message)
    }
}
exports.diarios = async (req, res) => {


}