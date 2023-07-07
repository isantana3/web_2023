import { type IUser } from "./user.types";

export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IForgotPasswordResponse {
  message: string;
}

export interface IAuthUser {
  token: string;
  user: IUser;
}

export interface ICreateAccount {
  name: string;
  email: string;
  registration: string;
  office: string;
}

export interface INewAccess {
  token: string;
  password: string;
}
