import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setLocation } from "./location.slice";

import { type ILocationSlice, type IUseLocation } from "./locationSlice.types";

export function useLocation(): IUseLocation {
  const dispatch = useDispatch<AppDispatchType>();
  const { locations } = useSelector(
    (state: RootStateType) => state.locationReducer
  );

  return {
    setLocation: (payload: ILocationSlice) => dispatch(setLocation(payload)),
    locations,
  };
}
