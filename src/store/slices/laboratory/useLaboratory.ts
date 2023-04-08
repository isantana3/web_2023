import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setinfra } from "./laboratory.slice";

import { type ILaboratorySlice, type IUseLaboratory } from "./laboratory.types";

export function useLaboratory(): IUseLaboratory {
  const dispatch = useDispatch<AppDispatchType>();
  const { infra } = useSelector((state: RootStateType) => state.infraReducer);

  return {
    setlaboratory: (payload: ILaboratorySlice) => dispatch(setinfra(payload)),
    infra,
  };
}
