import { team } from "./user";

export interface IUserPutUser {
  id: string; /// params
  first_name: string;
  last_name: string;
  team: team;
  email: string;
  avatar_url: string;
}
