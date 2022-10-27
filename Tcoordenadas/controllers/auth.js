const { Kafka } = require('kafkajs')
const { coord } = require('../coords')


exports.coordenadas = async (req, res) => {
    await coord()
    try {
        
     
    }
    catch (error) {
        console.log(error.message)
    }
}
exports.diarios = async (req, res) => {


}