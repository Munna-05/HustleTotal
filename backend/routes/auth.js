import express from 'express' 
const router=express.Router()
import {controller} from '../controllers/authControl.js'
import {auth} from '../middleware/middle.js'



router.post('/signup',controller.register)
router.post('/login',controller.login)
router.get('/youtube',controller.getYoutube)


export default router