
import { api } from "service/server";

export const Calendar =  {

  getCalendars: async (): Promise<ICalendar[]> => {
    return (await api.get("/Calendar")).data;
  },

  getCalendar: async (id: string): Promise<ICalendar> => {
    return (await api.get(`/Calendar/${id}`)).data;
  },

  updateCalendar: async (id: string, data: ICalendar): Promise<boolean> => {
    return await api.put(`/Calendar/${id}`, data);
  },

  deleteCalendar: async (id: string): Promise<boolean> => {
    return await api.delete(`/Calendar/${id}`);
  },

  createCalendar: async (data: ICalendar): Promise<boolean> => {
    return await api.post("/Calendar", data);
  },
}
