import {Model} from 'sequelize'

class Likes extends Model {
  user_id: string | undefined
  post_id: string | undefined
  like_state: string | undefined
}

export default Likes