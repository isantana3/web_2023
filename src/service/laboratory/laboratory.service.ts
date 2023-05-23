import { api } from "service/server";

import { type ILaboratory } from "global/laboratory.types";

export const laboratoryService = {
  getLaboratorys: async (): Promise<ILaboratory[]> => {
    return (await api.get("/laboratory")).data;
  },

  getLaboratory: async (id: string): Promise<ILaboratory> => {
    return (await api.get(`/laboratory/${id}`)).data;
  },

  updateLaboratory: async (id: string, data: ILaboratory): Promise<boolean> => {
    return await api.put(`/laboratory/${id}`, data);
  },

  deleteLaboratory: async (id: string): Promise<boolean> => {
    return await api.delete(`/laboratory/${id}`);
  },

  createLaboratory: async (data: ILaboratory): Promise<boolean> => {
    return await api.post("/laboratory", data);
  },
};
