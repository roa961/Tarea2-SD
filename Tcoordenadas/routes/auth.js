const {Router} = require('express')
const router = Router()
const { Coords } = require('../controllers/auth')


router.get('/coordenadas', Coords)


module.exports =  router