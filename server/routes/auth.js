const {Router} = require('express')
const { Coord, RegistrarCarrito, RegistroVenta, profugo,  } = require('../controllers/auth')
const router = Router()


router.post('/coordenadas', Coord)

router.post('/registrar', RegistrarCarrito)

router.post('/venta', RegistroVenta)

router.post('/profugo', profugo)

module.exports =  router