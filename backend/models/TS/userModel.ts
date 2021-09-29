import {Model} from 'sequelize'
import * as uuid from 'uuid'

class User extends Model {
  id: number | undefined
  email: string | undefined
  password: string | undefined
  firstname: string | undefined
  lastname: string | undefined
  pseudo: string | undefined
  avatar_url: string | undefined
  signup_date: Date | undefined
  role: string | undefined
}

export default User
