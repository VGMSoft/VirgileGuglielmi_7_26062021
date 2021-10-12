import User from "../../../backend/models/TS/userModel";

export interface PostModel {
  id: number | undefined
  userId: string | undefined
  user?: User | undefined
  content: string | undefined
  date: string | undefined
}
