import {Request, Response} from 'express'
import Post from '../models/TS/postModel'

//TODO v
export const createPost = (req: Request, res: Response, next) => {
  Post.create({})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getAllPosts = (req: Request, res: Response, next) => {
  Post.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const getOnePost = (req: Request, res: Response, next) => {
  Post.findAll({where: {}})
    .then(() => {

    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editPost = (req: Request, res: Response, next) => {
  Post.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const deletePost = (req: Request, res: Response, next) => {
  Post.destroy({where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}