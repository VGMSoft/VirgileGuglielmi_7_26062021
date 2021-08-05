import {Model} from 'sequelize'

class Post extends Model {
  id: number | undefined
  userId: string | undefined
  post_content: string | undefined
  post_date: string | undefined
}
export default Post







