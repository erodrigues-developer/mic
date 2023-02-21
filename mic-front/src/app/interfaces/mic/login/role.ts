import { Permission } from "./permission";

export interface Role {
  id: number,
  role: string,
  created_at: string,
  updated_at: string,
  permissions: Permission[],
}