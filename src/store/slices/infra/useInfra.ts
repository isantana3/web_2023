import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setInfra } from "./infra.slice";

import { type IInfraSlice, type IUseInfra } from "./infraSlice.types";

export function useInfra(): IUseInfra {
  const dispatch = useDispatch<AppDispatchType>();
  const { infra } = useSelector((state: RootStateType) => state.infraReducer);

  return {
    setInfra: (payload: IInfraSlice) => dispatch(setInfra(payload)),
    infra,
  };
}
