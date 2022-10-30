const {Router} = require('express')
const { Stock } = require('../controllers/auth')
const router = Router()


router.post('/stock', Stock)

module.exports =  router