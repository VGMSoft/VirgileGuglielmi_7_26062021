import {Request, Response} from "express"
import Post from "../models/TS/postModel"
import User from "../models/TS/userModel"

export const createPost = (req: any, res: Response, next) => {
  // console.log(req.user.dataValues.id)
  const user = req.user.dataValues
  user.id

  Post.create({...req.body}, )
    .then(() => res.status(201).json({message: 'Post saved successfully!'}))
    .catch(error => res.status(400).json({error}))
}

export const getAllPosts = (req: Request, res: Response, next) => {
  Post.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(404).json({error}))
}
//TODO console.log(posts.every(posts => posts instanceof Post))

export const getOnePost = (req: Request, res: Response, next) => {
  Post.findOne({where: {id: req.body.id}})
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({error}))
}


export const editPost = (req: Request, res: Response, next) => {
  Post.update({...req.body}, {where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Post updated successfully!'}))
    .catch(error => res.status(400).json({error}))
}


export const deletePost = (req: Request, res: Response, next) => {
  Post.destroy({where: {id: req.body.id}})
    .then(() => res.status(201).json({message: 'Post deleted successfully!'}))
    .catch(error => res.status(400).json({error}))
}