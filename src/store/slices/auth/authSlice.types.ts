import { type IUser } from "global/user.types";

export interface IAuthUserSlice {
  user: IUser;
}

export interface IUseAuthUser extends IAuthUserSlice {
  authenticate: (payload: IAuthUserSlice) => void;
}
