export type team = "FND" | "BND" | "QA" | "DESIGN" | "HR";

export enum userRole {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  team: team;
  email: string;
  password: string;
  confirmPassword: string;
  role: userRole;
  avatar_url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
