import express from 'express'
import controller from '../../controllers/auth.controller.js'
const Router = express.Router()

Router.get('/', controller.show)
Router.post('/register', controller.register)

export default Router