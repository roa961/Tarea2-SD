const { Kafka } = require('kafkajs')
const db = require('./db')


const Diarias = async () => {
    const kafka = new Kafka({
        clientId: 'my-app123',
        brokers: ['localhost:9092'], //cambiar a kafka cuando sea docker
    })
    const consumer = kafka.consumer({ groupId: 'test-gro2d221' })

    await consumer.connect()
    await consumer.subscribe({ topic: "ventas", fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            let patente = JSON.parse(message.value.toString()).patente
            let cliente = JSON.parse(message.value.toString()).cliente
            let sopaipas = JSON.parse(message.value.toString()).n_sopaipillas

            const query = {
                values: [patente, cliente, sopaipas],
                text: 'insert into ventas(patente, cliente, n_sopaipillas) values($1, $2, $3)'
            }
            await db.query(query)

        },
        

    })
    
    const EARLIEST_OFFSET = -2

    const partitions = [0, 1, 2]

    partitions.forEach((partition) => {
        consumer.seek({ topic: 'ventas', offset: EARLIEST_OFFSET, partition })
    })
   

}
module.exports = { Diarias }