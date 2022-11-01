import express from 'express'
import cors from 'cors'
import passport from 'passport'
import strategies from './passport.js'
import authRoute from '../routes/v1/auth.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(passport.initialize())
passport.use('jwt', strategies.jwt)
// passport.use('twitter', strategies.oauth)
// passport.use('github', strategies.oauth)

app.use('/v1', authRoute)

export default app