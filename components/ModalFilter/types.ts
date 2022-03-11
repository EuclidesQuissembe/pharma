export interface IProps {
  isOpen: boolean
  callback: (filter: string | null) => void
  active: string
}