import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setinfra } from "./infra.slice";

import { type IInfraSlice, type IUseInfra } from "./infraSlice.types";

export function useInfra(): IUseInfra {
  const dispatch = useDispatch<AppDispatchType>();
  const { infra } = useSelector((state: RootStateType) => state.infraReducer);

  return {
    setinfra: (payload: IInfraSlice) => dispatch(setinfra(payload)),
    infra,
  };
}
