import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setLaboratory } from "./laboratory.slice";

import { type ILaboratorySlice, type IUseLaboratory } from "./laboratory.types";

export function useLaboratory(): IUseLaboratory {
  const dispatch = useDispatch<AppDispatchType>();
  const { laboratory } = useSelector(
    (state: RootStateType) => state.laboratoryReducer
  );

  return {
    setLaboratory: (payload: ILaboratorySlice) =>
      dispatch(setLaboratory(payload)),
    laboratory,
  };
}
