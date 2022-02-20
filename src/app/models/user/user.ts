import { Role } from './role';

export class User {
  _id?: string;

  name?: string;

  role?: Role;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
