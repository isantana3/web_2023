import { type IUser } from "./user.types";

export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}
export interface IAuthUser {
  token: string;
  user: IUser;
}
