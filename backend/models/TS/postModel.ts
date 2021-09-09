import {Model} from 'sequelize'
import User from "./userModel";

class Post extends Model {
  id: number | undefined
  user: User
  // userId: string | undefined
  post_content: string | undefined
  post_date: string | undefined
}
export default Post







