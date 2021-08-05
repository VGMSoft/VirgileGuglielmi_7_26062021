import {Request, Response} from 'express'
import User from './../models/TS/userModel'

export const createProfile = (req: Request, res: Response, next) => {
  User.create({...req.body})
    .then(() => res.status(201).json({message: 'User saved successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const getProfile = (req: Request, res: Response, next) => {
  User.findOne({where: {id: req.params.id}})
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
  User.update({},{where: {}})
    .then(() => {})
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editAvatar = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}