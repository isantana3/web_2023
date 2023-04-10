import { createSlice } from "@reduxjs/toolkit";

import { type ICalendarSlice } from "./calendarSlice.types";
import { type ICalendar } from "global/calendar.types";

const initialState: ICalendarSlice = {
  calendars: [{}] as ICalendar[],
};

const slice = createSlice({
  name: "calendars",
  initialState,
  reducers: {
    setCalendar: (state, action: { payload: ICalendarSlice }) => {
      state.calendars = action.payload.calendars;
    },
  },
});

export const { setCalendar } = slice.actions;

export default slice.reducer;
