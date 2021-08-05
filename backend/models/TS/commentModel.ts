import {Model} from 'sequelize'

class Comments extends Model {
  id: number | undefined
  userId: string | undefined
  postId: string | undefined
  comment_content: string | undefined
  comment_date: string | undefined
}

export default Comments