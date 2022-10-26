const {Router} = require('express')
const { Coords } = require('../controllers/auth')
const router = Router()


router.post('/coordenadas', Coords)

module.exports =  router