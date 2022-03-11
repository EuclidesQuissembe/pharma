import { IUser } from "../../@types/data";

export interface IProps {
  isOpen: boolean
  callback: () => void
  user: IUser | null
}