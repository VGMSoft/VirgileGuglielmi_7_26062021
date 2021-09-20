import {Request, Response} from "express"
import Post from "../models/TS/postModel"
import User from "../models/TS/userModel"

export const createPost = async (req: any, res: Response, next) => {
  const userId = req.user.dataValues.id
  try {
    await Post.create({...req.body, userId})
    res.status(201).json({message: 'Post saved successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

export const getAllPosts = async (req: Request, res: Response, next) => {
  try {
    const posts = await Post.findAll({include: [User]})
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({error})
  }
}

export const getOnePost = async (req: Request, res: Response, next) => {
  try {
    const post = await Post.findOne({where: {id: req.body.id}, include: [User]})
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({error})
  }
}


export const editPost = async (req: Request, res: Response, next) => {
  try {
    await Post.update({...req.body}, {where: {id: req.body.id}})
    res.status(201).json({message: 'Post updated successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}


export const deletePost = async (req: Request, res: Response, next) => {
  try {
    await Post.destroy({where: {id: req.body.id}})
    res.status(201).json({message: 'Post deleted successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}