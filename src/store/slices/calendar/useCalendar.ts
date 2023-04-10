import { useDispatch, useSelector } from "react-redux";

import { type AppDispatchType, type RootStateType } from "../../store";

import { setCalendar } from "./calendar.slice";

import { type ICalendarSlice, type IUseCalendar } from "./calendarSlice.types";

export function useInfra(): IUseCalendar {
  const dispatch = useDispatch<AppDispatchType>();
  const { calendars } = useSelector(
    (state: RootStateType) => state.calendarReducer
  );

  return {
    setCalendar: (payload: ICalendarSlice) => dispatch(setCalendar(payload)),
    calendars,
  };
}
