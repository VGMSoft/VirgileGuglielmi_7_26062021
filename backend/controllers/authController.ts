import {Request, Response} from 'express'
import User from '../models/TS/userModel'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {checkpass} from "../lib/checkpass"
import {encrypt, iv, key} from "../middleware/cryptoJS"
import * as path from "path"
import * as fs from "fs"

//
const PRIV_KEY = fs.readFileSync(path.join(__dirname, './../lib/keyGen', 'id_rsa_priv.pem'), 'utf8')
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const signup = async (req: Request, res: Response, next) => {
  try {
    let email = await User.findOne({where: {email: encrypt(req.body.email, key, iv)}})
    if (email) {
      res.status(405).json({message: 'Account already exists !'})
    } else {
      try {
        //Password is minimum 8 chars, 1 uppercase, 1 letter, 1 number, 1 special char
        const pass = checkpass(req.body.password)
        if (pass.match(passRegex)) {
          let hash = await bcrypt.hash(pass, 10)
          try {
            await User.create({
              ...req.body,
              email: encrypt(req.body.email, key, iv),
              password: hash
            })
            res.status(201).json({message: 'User saved successfully!'})
          } catch (error) {
            res.status(401).json({error})
          }
        }
      } catch {
        res.status(404).json({message: 'Le mot de passe fourni ne correspond pas au format demandé !'})
      }
    }
  } catch (error) {
    res.status(500).json({error})
  }
}


export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: encrypt(req.body.email, key, iv)}})
    if (!user) {
      return res.status(401).json({error: 'Utilisateur non trouvé !'})
    }
    try {
      const valid = await bcrypt.compare(req.body.password, user.password)
      if (!valid) {
        return res.status(401).json({error: 'Mot de passe incorrect !'})
      } else {
        res.status(200).json({
          userId: user.id,
          token: jwt.sign(
            {userId: user.id},
            `${PRIV_KEY}`,
            {expiresIn: '24h', algorithm: 'RS256'}
          )
        })
      }
    } catch (error) {
      res.status(500).json({error})
    }
  } catch (error) {
    res.status(500).json({error})
  }
}
