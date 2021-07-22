import {Request, Response} from 'express'
import Like from '../models/TS/likeModel'

//TODO v
export const likePost = (req: Request, res: Response, next) => {
  Like.create({})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getLike = (req: Request, res: Response, next) => {
  Like.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const updateLike = (req: Request, res: Response, next) => {
  Like.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}
