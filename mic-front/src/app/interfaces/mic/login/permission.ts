import { Pivot } from "./pivot";

export interface Permission {
  id: number,
  permission: string,
  created_at: string,
  updated_at: string,
  pivot: Pivot,
}