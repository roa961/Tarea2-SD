const {Router} = require('express')
const { getTest, RegistrarCarrito, RegistroVenta, AgenteExt } = require('../controllers/auth')
const router = Router()
const { Kafka } = require('kafkajs')



router.post('/reporte', AgenteExt)

router.post('/registrar', RegistrarCarrito)

router.post('/venta', RegistroVenta)

module.exports =  router