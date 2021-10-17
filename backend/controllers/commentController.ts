import {Request, Response} from 'express'
import Comment from '../models/TS/commentModel'
import Post from "../models/TS/postModel";
import User from "../models/TS/userModel";


// OK
export const createComment = async (req: Request, res: Response, next) => {
  try {
    await Comment.create({...req.body})
    res.status(201).json({message: 'Comment saved successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

//TODO v
export const getAllPostComments = async (req, res: Response, next) => {
  // const postId = req.params.postId
  const postId = 6

  try {
    const comments = await Comment.findAll(
      {
        where: {postId: postId},
        include: [{
          model: Post,
          required: true
        }, {
          model: User,
          required: true
        }]
      }
    )
    res.status(200).json(comments)
  } catch (error) {
    res.status(404).json({error})
  }
}
//TODO v
export const getOneComment = async (req: Request, res: Response, next) => {
  const postId = req.params.postId

  try {
    const comment = await Comment.findOne({
      where: {id: postId}, include: [{
        model: Post,
        required: true
      }]
    })
    res.status(200).json(comment)
  } catch (error) {
    res.status(404).json({error})
  }
}
//TODO v
export const editComment = async (req: Request, res: Response, next) => {
  const commentId = req.params.commentId
  try {
    await Comment.update({...req.body}, {where: {id: commentId}})
    res.status(201).json({message: 'Comment updated successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

export const deleteComment = async (req: Request, res: Response, next) => {
  const commentId = req.params.commentId
  try {
    await Comment.destroy({where: {id: commentId}})
    res.status(201).json({message: 'Comment deleted successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}