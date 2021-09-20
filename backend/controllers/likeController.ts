import {Request, Response} from 'express'
import Like from '../models/TS/likeModel'

export const createLike = async (req: Request, res: Response, next) => {
  try {
    await Like.create({...req.body})
    res.status(201).json({message: 'Like saved successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

export const getAllLikes = async (req: Request, res: Response, next) => {
  try {
    const likes = await Like.findAll()
    res.status(200).json(likes)
  } catch (error) {
    res.status(404).json({error})
  }
}

export const updateLike = async (req: Request, res: Response, next) => {
  try {
    await Like.update({...req.body}, {where: {id: req.body.id}})
    res.status(201).json({message: 'Like updated successfully!'})
  } catch (error) {
    res.status(400).json({error})

  }
}
export const deleteLike = async (req: Request, res: Response, next) => {
  try {
    await Like.destroy({where: {id: req.body.id}})
    res.status(201).json({message: 'Like deleted successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}