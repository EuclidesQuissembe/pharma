import { IUser } from "../../@types/data";

export interface IProps {
  showModal: (user: IUser) => void
  user: IUser
}