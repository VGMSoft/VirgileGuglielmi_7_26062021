//TODO https://www.youtube.com/watch?v=SBvmnHTQIPY
//TODO https://www.youtube.com/watch?v=-RCnNyD0L-s
//TODO https://www.youtube.com/watch?v=Ne0tLHm1juE&t=1200s

import * as path from 'path'
import * as fs from 'fs'
import passport from 'passport'
import {Strategy, ExtractJwt} from 'passport-jwt'
import User from '././../models/TS/userModel'

const pathToKey = path.join(__dirname, './keyGen', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
}

export const initPassport = (passport) => {
  passport.use(new Strategy(options, function (jwt_payload, done) {
    console.log(jwt_payload)
    User.findOne({where: {user: jwt_payload.sub}})
      .then(
        (user) => {
          if (user) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        }
      )
      .catch((err) => {
        return done(err, false)
      })
  }))
}

export let auth = passport.authenticate('jwt', {session: false})
