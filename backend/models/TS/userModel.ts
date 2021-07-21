import {Model} from 'sequelize'

class User extends Model {
  id: number | undefined
  email: string
  password: string | undefined
  pseudo: string | undefined
  avatar_url: string | undefined
  signup_date: Date | undefined
  pwd_set: Date | undefined
}

export default User
