import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { authenticate } from "./auth.slice";

import { type IAuthUserSlice, type IUseAuthUser } from "./authSlice.types";

export function useAuth(): IUseAuthUser {
  const dispatch = useDispatch<AppDispatchType>();
  const { user } = useSelector((state: RootStateType) => state.authReducer);

  return {
    authenticate: (payload: IAuthUserSlice) => dispatch(authenticate(payload)),
    user,
  };
}
