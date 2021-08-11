import {Request, Response} from 'express'
import User from './../models/TS/userModel'
import {encrypt, key, iv} from "../middleware/cryptoJS"
import bcrypt from 'bcrypt'
import {checkpass} from "../middleware/password"


export const createProfile = (req: Request, res: Response, next) => {
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

export const getProfile = (req: Request, res: Response, next) => {
  User.findOne({where: {id: req.body.id}})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({error}))
}


export const editProfile = (req: Request, res: Response, next) => {
  User.update({...req.body}, {where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'User updated successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const deleteProfile = (req: Request, res: Response, next) => {
  User.destroy({where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'User deleted successfully!'}))
    .catch(error => res.status(400).json({error}))
}

//TODO v
export const addAvatar = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editAvatar = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}