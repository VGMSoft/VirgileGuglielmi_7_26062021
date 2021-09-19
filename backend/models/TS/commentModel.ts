import {Model} from 'sequelize'

class Comments extends Model {
  id: number | undefined
  userId: string | undefined
  postId: string | undefined
  content: string | undefined
  date: string | undefined
}

export default Comments