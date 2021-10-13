import {Request, Response} from 'express'
import User from './../models/TS/userModel'
import {decrypt, encrypt, iv, key} from "../middleware/cryptoJS";

//OK
export const getProfile = async (req, res: Response, next) => {
  const userId: string = req.user.dataValues.id
  try {
    let user = await User.findOne({where: {id: userId}})
    res.status(200).json({
      ...req.user.dataValues,
      email: decrypt(req.user.dataValues.email, key, iv),
      signup_date: JSON.stringify(req.user.dataValues.signup_date).slice(1, 11)
    })
  } catch (error) {
    res.status(404).json({error})
  }
}

// OK
export const editProfile = async (req, res: Response, next) => {
  const userId: string = req.user.dataValues.id

  let email = await User.findOne({where: {email: encrypt(req.body.email, key, iv)}})
  if (email) {
    res.status(405).json({message: 'This email is already used !'})
  } else {
    const reqBody = req.body.email
      ? {
        ...req.body,
        email: encrypt(req.body.email, key, iv)
      }
      : {...req.body}
    try {
      await User.update({...reqBody}, {where: {id: userId}})
      res.status(201).json({message: 'User updated successfully!'})
    }
    catch (error) {
      res.status(404).json({error})
    }
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
export const addAvatar = async (req, res: Response, next) => {
  const userId: string = req.user.dataValues.id
  const profilePic = req.file
    ? {
      ...req.body,
      avatar_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    : {
      ...req.body
    }
    console.log(req.file)
  try {
    console.log(profilePic, req.file)
    await User.update({...profilePic, id: userId}, {where: {id: userId}})
    res.status(201).json({message: 'Profile picture added successfully!'})
  } catch (error) {
    res.status(400).json({error})
  }
}