import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setUser } from "./user.slice";

import { type IUserSlice, type IUseUser } from "./userSlice.types";

export function useUser(): IUseUser {
  const dispatch = useDispatch<AppDispatchType>();
  const { user } = useSelector((state: RootStateType) => state.userReducer);

  return {
    setUser: (payload: IUserSlice) => dispatch(setUser(payload)),
    user,
  };
}
