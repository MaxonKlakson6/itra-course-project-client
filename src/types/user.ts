import { Roles } from 'src/types/roles';

export interface User {
  id: number;
  name: string;
  email: string;
  isBlocked: boolean;
  role: Roles;
}
