import { type ICalendar } from "global/calendar.types";

export interface ICalendarSlice {
  calendars: ICalendar[];
}

export interface IUseCalendar extends ICalendarSlice {
  setCalendar: (payload: ICalendarSlice) => void;
}
