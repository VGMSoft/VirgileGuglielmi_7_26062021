import User from "../../../backend/models/TS/userModel";
import Post from "../../../backend/models/TS/commentModel";

export interface CommentModel {
  id: number | undefined
  userId: string | undefined
  user?: User | undefined
  postId: string | undefined
  post?: Post | undefined
  content: string | undefined
  date: string | undefined
}
