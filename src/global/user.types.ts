export type UserType = "admin" | "user" | "manager";

export interface IUser {
  _id: string;
  role: UserType;
  name: string;
  email: string;
  registration: number;
  office: string;
  password?: string;
}
