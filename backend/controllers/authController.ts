import {Request, Response} from 'express'
import User from '../models/TS/userModel'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {checkpass} from "../lib/checkpass"
import {encrypt, iv, key} from "../middleware/cryptoJS"
import * as path from "path"
import * as fs from "fs"

export const signup = (req: Request, res: Response, next) => {
  User.findOne({where: {email: encrypt(req.body.email, key, iv)}})
    .then(email => {
      if (email) {
        res.status(405).json({message: 'Account already exists !'})
      } else {
        //Password is minimum 8 chars, 1 uppercase, 1 letter, 1 number, 1 special char
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        const pass = checkpass(req.body.password)
        if (pass.match(passRegex)) {
          bcrypt.hash(pass, 10)
            .then(hash => {
              User.create({
                ... req.body,
                email: encrypt(req.body.email, key, iv),
                password: hash
              })
                .then(() => res.status(201).json({message: 'User saved successfully!'}))
                .catch(error => res.status(401).json({error}))
            })
        } else {
          res.status(404).json({message: 'Le mot de passe fourni ne correspond pas au format demandé !'})
        }
      }
    })
    .catch(error => res.status(500).json({error}))
}

const pathToKey = path.join(__dirname, './../lib/keyGen', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

export const login = (req, res, next) => {
  User.findOne({where: {email: encrypt(req.body.email, key, iv)}})
    .then(user => {
      if (!user) {
        return res.status(401).json({error: 'Utilisateur non trouvé !'})
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({error: 'Mot de passe incorrect !'})
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
              {userId: user.id},
              `${PRIV_KEY}`,
              {expiresIn: '24h', algorithm: 'RS256'}
            )
          })
        })
        .catch(error => res.status(500).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}
