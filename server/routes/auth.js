const {Router} = require('express')
const { Coord, RegistrarCarrito, RegistroVenta, stock,  } = require('../controllers/auth')
const router = Router()


router.post('/coordenadas', Coord)

router.post('/registrar', RegistrarCarrito)

router.post('/venta', RegistroVenta)

router.post('/stock', stock)

module.exports =  router