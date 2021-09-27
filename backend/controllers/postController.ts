import {Request, Response} from "express"
import Post from "../models/TS/postModel"
import User from "../models/TS/userModel"

//OK
export const createPost = async (req: any, res: Response, next) => {
  const userId = req.user.dataValues.id
  try {
    await Post.create({...req.body, userId})
    res.status(201).json({message: 'Post saved successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

//OK
export const getAllPosts = async (req: Request, res: Response, next) => {
  try {
    const posts = await Post.findAll({
      include: [{
        model: User,
        required: true
      }]
    })
    res.status(200).json(posts)
  } catch
    (error) {
    res.status(404).json({error})
  }
}

//OK
export const getOnePost = async (req: Request, res: Response, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.id}, include: [{
        model: User,
        required: true
      }]
    })
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({error})
  }
}

//OK
export const editPost = async (req: Request, res: Response, next) => {
  try {
    await Post.update({...req.body}, {where: {id: req.params.id}})
    res.status(201).json({message: 'Post updated successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

//OK
export const deletePost = async (req: Request, res: Response, next) => {
  try {
    await Post.destroy({where: {id: req.params.id}})
    res.status(201).json({message: 'Post deleted successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}