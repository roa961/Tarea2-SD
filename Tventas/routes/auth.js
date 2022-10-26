const {Router} = require('express')
const router = Router()
const { ventas, diarios } = require('../controllers/auth')


router.get('/ventas-diarias', ventas)
router.get('/consumer', diarios)

module.exports =  router