import { Associate } from "./associate"

export interface AssociateCollection {
  success: boolean
  current_page: number
  per_page: number
  total: number
  last_page: number
  data: Array<Associate>
}