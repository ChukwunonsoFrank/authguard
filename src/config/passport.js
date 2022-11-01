import { Strategy as JwtStrategy } from 'passport-jwt'
import BearerStrategy from 'passport-http-bearer'
import { ExtractJwt } from 'passport-jwt'
import { JwtSecret } from './env.js'

const JwtOptions = {
    secretOrKey: JwtSecret,
    JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwt = async (payload, done) => {
    try {
        const user = User.findById(payload.sub)
        if (user) return done(null, user)
        return done(null, false)
    } catch (error) {
        return done(error, false)
    }
}

export default {
    jwt: new JwtStrategy(jwtOptions, jwt)
}