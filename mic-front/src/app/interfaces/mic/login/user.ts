import { Role } from "./role";

export interface User {
  id: number,
  role_id: number,
  name: string,
  email: string,
  email_verified_at: string | null,
  created_at: string,
  updated_at: string,
  role: Role,
}