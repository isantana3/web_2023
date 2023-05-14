import { api } from "service/server";

import { type IHours } from "global/hours.types";

export const Hours = {
  getHours: async (): Promise<IHours[]> => {
    return (await api.get("/hours")).data;
  },

  getHour: async (id: number): Promise<IHours> => {
    return (await api.get(`/hours/${id}`)).data;
  },

  updateHours: async (id: number, data: IHours): Promise<boolean> => {
    return await api.put(`/hours/${id}`, data);
  },

  deleteHours: async (id: number): Promise<boolean> => {
    return await api.delete(`/hours/${id}`);
  },

  createHours: async (data: IHours): Promise<boolean> => {
    return await api.post("/hours", data);
  },
};
