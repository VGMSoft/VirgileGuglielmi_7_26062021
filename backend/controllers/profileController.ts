import {Request, Response} from 'express'
import User from './../models/TS/userModel'

//OK
export const getProfile = async (req, res: Response, next) => {
  const userId: string = req.user.dataValues.id
  try {
    const user = await User.findOne({where: {id: userId}})
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({error})
  }
}

// OK
export const editProfile = async (req, res: Response, next) => {
  const userId: string = req.user.dataValues.id
  // const reqBody = req.file
  // ? sanitize({
  //   ...req.body,
  //   avatarUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  // })
  // : sanitize({...req.body})
  try {
    await User.update({...req.body}, {where: {id: userId}})
    res.status(201).json({message: 'User updated successfully!'})
  } catch (error) {
    res.status(404).json({error})
  }
}

export const deleteProfile = async (req, res: Response, next) => {
  const userId: string = req.params.id
    // req.user.dataValues.id
  try {
    await User.destroy({where: {id: userId}})
    res.status(201).json({message: 'User deleted successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}

//TODO v
export const addAvatar = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}

//TODO v
export const editAvatar = (req: Request, res: Response, next) => {
  User.update({}, {where: {}})
    .then(() => {
    })
    .catch(error => res.status(200).json({error}))
}