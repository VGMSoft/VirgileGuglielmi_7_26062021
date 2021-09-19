import {Model} from 'sequelize'

class Like extends Model {
  userId: string | undefined
  postId: string | undefined
  state: string | undefined
}

export default Like