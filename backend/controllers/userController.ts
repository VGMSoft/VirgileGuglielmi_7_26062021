import {Request, Response} from 'express'
import User from '../models/TS/UserModel'


//TODO v
export const createProfile = (req: Request, res: Response, next) => {
  User.create({})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getProfile = (req: Request, res: Response, next) => {
  User.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editProfile = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const deleteProfile = (req: Request, res: Response, next) => {
  User.destroy({where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}


export const addAvatar = (req: Request, res: Response, next) => {
  User.create({})
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