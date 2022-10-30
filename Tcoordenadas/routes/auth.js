const {Router} = require('express')
const { coord } = require('../controllers/auth')
const router = Router()


router.post('/coordenadas', coord)

module.exports =  router