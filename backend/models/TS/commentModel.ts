import {Sequelize, Model, DataTypes} from 'sequelize'

class Comments extends Model {
  id: number | undefined
  user_id: string | undefined
  post_id: string | undefined
  comment_content: string | undefined
  comment_date: string | undefined
}

export default Comments