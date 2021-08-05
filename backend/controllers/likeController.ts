import {Request, Response} from 'express'
import Like from '../models/TS/likeModel'

export const createLike = (req: Request, res: Response, next) => {
  Like.create({...req.body})
    .then(() => res.status(201).json({message: 'Like saved successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const getAllLikes = (req: Request, res: Response, next) => {
  Like.findAll()
    .then(likes => res.status(200).json(likes))
    .catch(error => res.status(404).json({error}))
}

export const updateLike = (req: Request, res: Response, next) => {
  Like.update({...req.body}, {where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Like updated successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const deleteLike = (req: Request, res: Response, next) => {
  Like.destroy({where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Like deleted successfully!'}))
    .catch(error => res.status(400).json({error}))
}
