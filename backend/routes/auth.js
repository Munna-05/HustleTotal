const express = require('express')
const router=express.Router()
const controller=require('../controllers/authControl')



router.post('/signup',controller.register)


module.exports = router;