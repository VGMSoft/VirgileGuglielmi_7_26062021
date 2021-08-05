import {Model} from 'sequelize'

class Like extends Model {
  userId: string | undefined
  postId: string | undefined
  like_state: string | undefined
}

export default Like