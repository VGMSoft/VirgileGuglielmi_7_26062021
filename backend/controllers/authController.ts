import {Request, Response} from 'express'
import User from '../models/TS/userModel'

import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

import {encrypt, decrypt} from '../middleware/crypto'

export const signup = (req: Request, res: Response, next) => {
  User.findOne({where: {email: req.body.email}})
    .then(email => {
      if (email) {
        res.status(405).json({message: 'Account already exists !'})
      } else {
        //Password is minimum 8 chars, 1 uppercase, 1 letter, 1 number, 1 special char
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        const pass = req.body.password
        if (pass.match(passRegex)) {
          bcrypt.hash(pass, 10)
            .then(hash => {
              const user = new User({
                email: encrypt(req.body.email),
                password: hash
              })
              user.save()
                .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
                .catch(error => res.status(400).json({error}))
            })
            .catch(error => res.status(500).json({error}))
        } else {
          res.status(400).json({message: 'Mot de passe non conforme !'})
        }
      }
    })
    .catch(error => res.status(500).json({error}))
}

export const login = (req, res, next) => {
  User.findOne({where:{email: encrypt(req.body.email)}})
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
            userId: user._id,
            token: jwt.sign(
              {userId: user._id},
              `${process.env.TOKEN_KEY}`,
              {expiresIn: '24h'}
            )
          })
        })
        .catch(error => res.status(500).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}

//TODO v
export const logout = (req, res, next) => {
  User.findOne()
    .then(() => {
    })
    .catch(error => res.status().json({error}))
}