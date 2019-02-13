const { ExtractJwt, Strategy } = require('passport-jwt');
const adminModel = require('../models/admins');

class RouteAuthentication {
    constructor(passport, db) {
        this.adminModel = adminModel(db)
        this.opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.TOKEN_SECRET
        }
        this.configure(passport)
    }

    configure(passport) {
        passport.use(new Strategy(this.opts, (jwt_payload, done) => {
            this.adminModel.getAdmin(jwt_payload.username)
                .then(res => {
                    done(null, res)
                })
                .catch(e => {
                    done(e, false)
                })
        }))
    }
}

module.exports = (passport, db) => new RouteAuthentication(passport, db)