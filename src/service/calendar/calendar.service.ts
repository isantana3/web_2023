import { api } from "service/server";

import { type ICalendar } from "global/calendar.types";

export const calendarService = {
  getCalendars: async (): Promise<ICalendar[]> => {
    return (await api.get("/calendar")).data;
  },

  getCalendar: async (id: string): Promise<ICalendar> => {
    return (await api.get(`/calendar/${id}`)).data;
  },

  updateCalendar: async (id: string, data: ICalendar): Promise<boolean> => {
    return await api.put(`/calendar/${id}`, data);
  },

  deleteCalendar: async (id: string): Promise<boolean> => {
    return await api.delete(`/calendar/${id}`);
  },

  createCalendar: async (data: ICalendar): Promise<boolean> => {
    return await api.post("/calendar", data);
  },
};
