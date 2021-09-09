import {Request, Response} from 'express'
import User from './../models/TS/userModel'
import {sanitize} from '../lib/sanitize'

//Admin only
// export const getAllProfiles = async (req: Request, res: Response, next) => {
//   try {
//     const users = await User.findAll()
//     res.status(200).json(users)
//   } catch (error) {
//     res.status(404).json({error})
//   }
// }

export const getProfile = async (req: Request, res: Response, next) => {
  try {
    const users = await User.findOne({where: {id: req.params.id}})
      .then(user => res.status(200).json(user))
  } catch(error) {res.status(404).json({error})}
}


export const editProfile = (req: Request, res: Response, next) => {
  const saucePicture = req.file
    ? sanitize({
      ...req.body.sauce,
      avatarUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    : sanitize({...req.body})
  User.update({...saucePicture, id: req.params.id}, {where: {id: req.params.id}})
    .then(() => res.status(201).json({message: 'User updated successfully!'}))
    .catch(error => res.status(404).json({error}))
}

export const deleteProfile = (req: Request, res: Response, next) => {
  User.destroy({where: {id: req.params.id}})
    .then(() => res.status(201).json({message: 'User deleted successfully!'}))
    .catch(error => res.status(400).json({error}))
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