import {Request, Response} from 'express'
import Comment from '../models/TS/commentModel'

//TODO v
export const createComment = (req: Request, res: Response, next) => {
  Comment.create({...req.body})
    .then(() => res.status(201).json({message: 'Comment saved successfully!'}))
    .catch(error => res.status(400).json({error}))
}

//TODO v
export const getAllComments = (req: Request, res: Response, next) => {
  Comment.findAll()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(404).json({error}))
}

//TODO v
export const getOneComment = (req: Request, res: Response, next) => {
  Comment.findOne({where: {id: req.body.id}})
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({error}))
}

//TODO v
export const editComment = (req: Request, res: Response, next) => {
  Comment.update({...req.body}, {where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Comment updated successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const deleteComment = (req: Request, res: Response, next) => {
  Comment.destroy({where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Comment deleted successfully!'}))
    .catch(error => res.status(400).json({error}))
}