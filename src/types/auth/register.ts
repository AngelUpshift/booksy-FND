import { team } from "../user/user";

export interface IUserRegister {
  first_name: string;
  last_name: string;
  team: team;
  email: string;
  password: string;
  confirmPassword: string;
}
