import {Request, Response} from 'express'
import Comment from '../models/TS/commentModel'

//TODO v
export const createComment = (req: Request, res: Response, next) => {
  Comment.create({})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getAllComments = (req: Request, res: Response, next) => {
  Comment.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getOneComment = (req: Request, res: Response, next) => {
  Comment.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editComment = (req: Request, res: Response, next) => {
  Comment.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const deleteComment = (req: Request, res: Response, next) => {
  Comment.destroy({where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}