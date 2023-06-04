import { type IUser } from "global/user.types";

export interface IUserSlice {
  user: IUser;
}

export interface IUseUser extends IUserSlice {
  setUser: (payload: IUserSlice) => void;
}
