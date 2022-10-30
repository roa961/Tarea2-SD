const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app123',
  brokers: ['kafka:9092'], //cambiar a kafka cuando sea docker
})
const stock  = async() =>{
  const consumer = kafka.consumer({ groupId: "stock" });
  const stack=[];
  

  await consumer.connect()
  await consumer.subscribe({ topic: 'stock', fromBeginning: true })

  await consumer.run({
      eachMessage:  ({ topic, partition, message }) => {
        stack.push(message)
        if (stack.length() ==5){
            console.log("Stack lleno, se debe entregar pedidos: ")
            for(i=0;i<5;i++){
            console.log(JSON.parse(stack[i].value.toString()))
            }
        
        
        }
    
      },
    
  })
}
module.exports = { stock }