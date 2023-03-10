import { Roles } from 'src/types/roles';

export interface UserData {
  token: string;
  email: string;
  id: number;
  name: string;
  role: Roles;
}
