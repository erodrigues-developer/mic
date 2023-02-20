import { Provider } from "./provider"

export interface ProviderCollection {
  success: boolean
  current_page: number
  per_page: number
  total: number
  last_page: number
  data: Array<Provider>
}