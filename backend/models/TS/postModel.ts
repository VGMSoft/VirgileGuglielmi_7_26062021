import {Model} from 'sequelize'
import User from "./userModel";

class Post extends Model {
  id: number | undefined
  user: User
  content: string | undefined
  date: string | undefined
}
export default Post







