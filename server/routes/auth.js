const {Router} = require('express')
const { Coord, RegistrarCarrito, RegistroVenta,  } = require('../controllers/auth')
const router = Router()


router.post('/coordenadas', Coord)

router.post('/registrar', RegistrarCarrito)

router.post('/venta', RegistroVenta)

module.exports =  router